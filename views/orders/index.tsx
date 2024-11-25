import { WithUid } from 'burnbase/firestore';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FiPlus, FiSearch, FiShoppingCart, FiTrash } from 'react-icons/fi';

import { updateOrder } from '../../api/orders';
import deleteOrder from '../../api/orders/delete-order';
import getAllOrders from '../../api/orders/get-all-orders';
import { useUser } from '../../context/user';
import { Box, Button, Input, Typography } from '../../elements';
import useRerender from '../../hooks/use-rerender';
import { IOrder, orderStatusEnum } from '../../interface';
import OrderForm from './order-form';
import { TYPE_LEGEND } from './order-form/order-form.data';
import { OrdersProps } from './orders.types';
import OrderTable from './orders-table';

const Orders: FC<OrdersProps> = ({ status }) => {
  const { userData } = useUser();
  const { renderer, rerender } = useRerender();
  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState('');    
  const [orders, setOrders] = useState<ReadonlyArray<WithUid<IOrder>>>([]);
  const [selectDoc, setSelectedDoc] = useState<WithUid<IOrder> | null>(null);
  const [selectedList, setSelectedList] = useState<ReadonlyArray<string>>([]);

  const onSelect = (docId: string) =>
    setSelectedList(
      selectedList.includes(docId)
        ? selectedList.filter((id) => id !== docId)
        : [...selectedList, docId]
    );

  useEffect(() => {
    getAllOrders({
      conditions: [
        ['clientId', '==', userData?.clientId],
        ['status', '==', status],
      ],
    }).then(setOrders);
  }, [renderer]);

  const bulkDelete = () =>
    toast.promise(Promise.all(selectedList.map(deleteOrder)), {
      loading: 'Apagando pedidos',
      success: () => {
        setSelectedList([]);
        rerender();
        return 'Pedidos apagados com sucesso';
      },
      error: 'Ocorreu um erro ao apagar pedidos',
    });

  const ordering = () =>
    toast.promise(
      Promise.all(
        selectedList.map((uid) =>
          updateOrder({ docId: uid, status: orderStatusEnum.Encomendado })
        )
      ),
      {
        loading: 'Encomendando pedidos',
        success: () => {
          setSelectedList([]);
          rerender();
          return 'Pedidos encomendados com sucesso';
        },
        error: (e) => e.message ?? 'Ocorreu um erro ao encomendar pedidos',
      }
    );

  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" gap="2rem" flexDirection="column">
        <Box
          width="100%"
          display="flex"
          padding="0.5rem"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="space-between"
        >
        <Typography className='page-title' as="h2" mb={30}>
        {status===orderStatusEnum.Pendente ? 'Pedidos Pendentes' : 'Pedidos Concluídos / Ocorrência'}
      </Typography>
          {status === orderStatusEnum.Pendente && (
            <Box display="flex" gap="1rem">
              <Button mt="L" onClick={() => setOpen(true)}>
                <Typography as="span">Novo pedido</Typography>
                <Typography as="span" ml="M">
                  <FiPlus size={18} color="#FFF" />
                </Typography>
              </Button>
              <Button
                mt="L"
                bg={selectedList.length ? '#50ADE5' : '#686868'}
                onClick={() => selectedList.length && ordering()}
              >
                <Typography as="span">Encomendar</Typography>
                <Typography as="span" ml="M">
                  <FiShoppingCart size={18} color="#FFF" />
                </Typography>
              </Button>
              <Button
                mt="L"
                bg={selectedList.length ? '#DC2626' : '#686868'}
                onClick={() => selectedList.length && bulkDelete()}
              >
                <Typography as="span">Apagar</Typography>
                <Typography as="span" ml="M">
                  <FiTrash size={18} color="#FFF" />
                </Typography>
              </Button>
            </Box>
          )}
        </Box>
        <OrderTable
          setSelectedDoc={setSelectedDoc}
          customData={orders}   
          data={orders.filter((order) => {
            if(status===order?.status) return true;  
            else if (
              filter &&
              !order?.ref.includes(filter) &&
              !TYPE_LEGEND[order?.type].includes(filter)    
            )
              return false;  
             
          })}
          {...(status === orderStatusEnum.Pendente && {
            onSelect,
            selectedList,
          })}
        />
      </Box>
      {(isOpen || selectDoc) && (
        <OrderForm
          doc={selectDoc}
          isEditable={status === orderStatusEnum.Pendente}
          closeForm={() => {
            rerender();
            setOpen(false);
            setSelectedDoc(null);
          }}
        />
      )}
    </Box>
  );
};

export default Orders;
