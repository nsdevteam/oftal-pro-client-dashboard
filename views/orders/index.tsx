import { WithUid } from 'burnbase/firestore';
import { FC, useEffect, useState } from 'react';
import { FiPlus, FiSearch, FiShoppingCart } from 'react-icons/fi';

import getAllOrders from '../../api/orders/get-all-orders';
import { useUser } from '../../context/user';
import { Box, Button, Input, Typography } from '../../elements';
import { IOrder, orderStatusEnum } from '../../interface';
import OrderForm from './order-form';
import { TYPE_LEGEND } from './order-form/order-form.data';
import { OrdersProps } from './orders.types';
import OrderTable from './orders-table';

const Orders: FC<OrdersProps> = ({ status }) => {
  const { userData } = useUser();
  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [orders, setOrders] = useState<ReadonlyArray<WithUid<IOrder>>>([]);
  const [selectDoc, setSelectedDoc] = useState<WithUid<IOrder> | null>(null);

  useEffect(() => {
    getAllOrders({
      conditions: [
        ['clientId', '==', userData?.clientId],
        ['status', '==', status],
      ],
    }).then(setOrders);
  }, []);

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
          <Box
            width="100%"
            display="flex"
            mr={['0', 'S']}
            borderRadius="M"
            overflow="hidden"
            alignItems="center"
            color="textInverted"
            border="1px solid #E4E4E7"
            justifyContent="flex-start"
          >
            <Box cursor="pointer" padding="0.5rem" paddingRight="0">
              <FiSearch size={24} />
            </Box>
            <Box display="flex" flexDirection="column" flex="1">
              <Input
                p="L"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                type="search"
                name="search"
                value={filter}
                mr={['0', 'S']}
                ml={['0', 'S']}
                borderRadius="M"
                backgroundColor="transparent"
                placeholder="Filtrar pedidos..."
                onChange={(e) => setFilter(e.target.value)}
              />
            </Box>
          </Box>
          {status === orderStatusEnum.Pendente && (
            <Box display="flex" gap="1rem">
              <Button mt="L" onClick={() => setOpen(true)}>
                <Typography as="span">Novo pedido</Typography>
                <Typography as="span" ml="M">
                  <FiPlus size={18} color="#FFF" />
                </Typography>
              </Button>
              <Button mt="L" onClick={() => setOpen(true)}>
                <Typography as="span">Encomendar</Typography>
                <Typography as="span" ml="M">
                  <FiShoppingCart size={18} color="#FFF" />
                </Typography>
              </Button>
            </Box>
          )}
        </Box>
        <OrderTable
          setSelectedDoc={setSelectedDoc}
          data={orders.filter(({ ref, type }) => {
            if (
              filter &&
              !ref.includes(filter) &&
              !TYPE_LEGEND[type].includes(filter)
            )
              return false;

            return true;
          })}
        />
      </Box>
      <Typography as="h4" mt="2rem">
        Total de resultados: {orders.length}
      </Typography>
      {(isOpen || selectDoc) && (
        <OrderForm
          doc={selectDoc}
          isEditable={status === orderStatusEnum.Pendente}
          closeForm={() => {
            setOpen(false);
            setSelectedDoc(null);
          }}
        />
      )}
    </Box>
  );
};

export default Orders;
