import { FC } from 'react';

import { Box, Table, Typography } from '../../elements';
import { IOrder, TRowData } from '../../interface';

const HEADINGS: Record<string, string> = {
  ref: 'Ref/Nome de pacitente',
  type: 'Tipo',
  refractiveIndex: 'Índice de refração',
  color: 'Cor',
  treatment: 'Tratamento',
  diameter: 'Diâmetro',
};

const OrderTable: FC<{ data: ReadonlyArray<IOrder> }> = ({ data }) => (
  <Box width="100%">
    <Typography as="h2">Listagem de pedidos</Typography>
    <Table data={data as unknown as TRowData} columns={HEADINGS} />
  </Box>
);

export default OrderTable;
