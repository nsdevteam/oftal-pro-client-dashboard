import { FC, useEffect, useState } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi';

import getAllOrders from '../../api/orders/get-all-orders';
import { Box, Button, Input, Typography } from '../../elements';
import { IOrder } from '../../interface';
import OrderTable from './orders-table';

const Orders: FC = () => {
  const [orders, setOrders] = useState<ReadonlyArray<IOrder>>([]);

  useEffect(() => {
    getAllOrders().then(setOrders);
  });

  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" gap="2rem" flexDirection="column">
        <Box
          as="div"
          padding="0.5rem"
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box
            width="77%"
            display="flex"
            borderRadius="M"
            flexWrap="nowrap"
            overflow="hidden"
            mr={['NONE', 'S']}
            alignItems="center"
            color="textInverted"
            border="1px solid #E4E4E7"
            justifyContent="flex-start"
          >
            <Box cursor="pointer" padding="0.5rem" paddingRight="0">
              <FiSearch size={24} />
            </Box>
            <Input
              p="L"
              type="text"
              border="none"
              borderRadius="M"
              outline="none"
              backgroundColor="transparent"
              mr={['NONE', 'S']}
              ml={['NONE', 'S']}
              minWidth={['100%', '10rem']}
              width={['30rem']}
              placeholder="Procurar por pedidos..."
              name="search"
            />
          </Box>
          <Button
            p="L"
            type="button"
            effect="hover"
            display="flex"
            variant="primary"
            fontWeight="bold"
            color="#FFF"
            width={['10rem', 'NONE']}
            minWidth={['100%', '10rem']}
            borderRadius="M"
            marginTop="M"
            marginBottom="M"
            border="none"
            bg="#4763E4"
            justifyContent="center"
            alignItems="center"
          >
            Novo pedido
            <FiPlus size={18} color="#FFF" />
          </Button>
        </Box>
        <OrderTable data={orders} />
      </Box>
      <Box p="0.5rem" display="flex" justifyContent="space-between">
        <Typography as="h4">Total de resultados: {orders.length}</Typography>
        {/* <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            my="M"
            p="0.3rem"
            type="button"
            effect="hover"
            display="flex"
            variant="primary"
            color="#27272A"
            bg="transparent"
            alignItems="center"
            border="0.5px solid #E4E4E7"
            justifyContent="center"
            active={{
              background: '#4763E4',
              color: '#FFF',
            }}
          >
            <FiChevronLeft size={16} color="#27272A" />
            <Typography>Anterior</Typography>
          </Button>
          <Button
            my="M"
            p="0.3rem"
            type="button"
            effect="hover"
            display="flex"
            variant="primary"
            color="#27272A"
            bg="transparent"
            border="0.5px solid #E4E4E7"
            justifyContent="center"
            alignItems="center"
            active={{
              background: '#4763E4',
              color: '#FFF',
            }}
          >
            <Typography>Seguinte</Typography>
            <FiChevronRight size={16} color="#27272A" />
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Orders;
