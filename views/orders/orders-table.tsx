import { WithUid } from 'burnbase/firestore';
import { FC } from 'react';

import { Box, Table, Typography } from '../../elements';
import { IOrder, TRowData } from '../../interface';
import { OrdersTableProps } from './orders.types';

const HEADINGS: Record<string, string> = {
  ref: 'Ref/Nome de pacitente',
  type: 'Tipo',
  refractiveIndex: 'Índice de refração',
  color: 'Cor',
  treatment: 'Tratamento',
  diameter: 'Diâmetro',
};

const OrderTable: FC<OrdersTableProps> = ({ data, setSelectedDoc }) => (
  <Box width="100%">
    <Typography as="h2">Listagem de pedidos</Typography>
    <Table
      columns={HEADINGS}
      data={data as unknown as TRowData}
      onSelect={(item) => setSelectedDoc(item as unknown as WithUid<IOrder>)}
    />
  </Box>
);

export default OrderTable;
