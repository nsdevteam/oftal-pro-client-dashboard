import { WithUid } from 'burnbase/firestore';
import { FC, useEffect, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { v4 } from 'uuid';

import getAllOrders from '../../api/orders/get-all-orders';
import { useUser } from '../../context/user';
import { Box, Button, Input, Typography } from '../../elements';
import { IOrder } from '../../interface';
import OrderForm from './order-form';
import { STATUS_LEGEND, TYPE_LEGEND } from './order-form/order-form.data';
import OrderTable from './orders-table';

const Orders: FC = () => {
  const { userData } = useUser();
  const [isOpen, setOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [orders, setOrders] = useState<ReadonlyArray<WithUid<IOrder>>>([]);
  const [selectDoc, setSelectedDoc] = useState<WithUid<IOrder> | null>(null);
  const [statuses, setStatuses] = useState<ReadonlyArray<number>>([0, 1, 2]);

  useEffect(() => {
    getAllOrders({ conditions: [['clientId', '==', userData?.clientId]] }).then(
      setOrders
    );
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
          <Box display="flex" gap="0.5rem" my="1rem">
            {STATUS_LEGEND.map((item, index) => (
              <Button
                key={v4()}
                p="0.5rem"
                bg="transparent"
                border="1px solid"
                borderRadius="2rem"
                color={statuses.includes(index) ? '#4256d0' : '#686868'}
                onClick={() =>
                  setStatuses(
                    statuses.includes(index)
                      ? statuses.filter((status) => status !== index)
                      : [...statuses, index]
                  )
                }
              >
                {item}
              </Button>
            ))}
          </Box>
          <Button mt="L" onClick={() => setOpen(true)}>
            <Typography as="span">Novo pedido</Typography>
            <Typography as="span" ml="M">
              <FiPlus size={18} color="#FFF" />
            </Typography>
          </Button>
        </Box>
        <OrderTable
          setSelectedDoc={setSelectedDoc}
          data={orders.filter(({ ref, type, status }) => {
            if (
              filter &&
              !ref.includes(filter) &&
              !TYPE_LEGEND[type].includes(filter)
            )
              return false;

            if (statuses.length && !statuses.includes(status ?? 0)) {
              console.log({ statuses });

              return false;
            }

            return true;
          })}
        />
      </Box>
      <Typography as="h4" mt="2rem">
        Total de resultados: {orders.length}
      </Typography>
      {isOpen && (
        <OrderForm
          doc={selectDoc}
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
