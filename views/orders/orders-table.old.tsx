import { FC } from 'react';

import { Box, Table, Typography } from '../../elements';
import { TRowData } from '../../interface';
import { STATUS_LEGEND } from './order-form/order-form.data';
import { OrdersTableProps } from './orders.types';

const HEADINGS: Record<string, string> = {
  ref: 'Ref/Nome de pacicente',
  type: 'Tipo',
  refractiveIndex: 'Índice de refração',
  color: 'Cor',
  status: 'Estado',
  spherical: 'Esférico',
  cylinder: 'Cilindro',
  axis: 'Eixo',
  addition: 'Adição',
};

const OrderTable: FC<OrdersTableProps> = ({
  data,
  onSelect,
  selectedList,
  setSelectedDoc,
}) => (
  <Box width="100%">
    <Typography as="h2">Listagem de pedidos</Typography>
    <Table
      columns={HEADINGS}
      onSelect={onSelect && ((index) => onSelect(data[index].uid))}
      onClick={(index) => setSelectedDoc(data[index])}
      selectList={
        selectedList
          ? selectedList.map((docId) =>
              data.findIndex(({ uid }) => uid === docId)
            )
          : []
      }
      data={
        data.map(
          ({
            ref,
            type,
            color,
            status,
            leftEye,
            rightEye,
            clientId,
            createdAt,
            refractiveIndex,
          }) => ({
            ref: `${new Date(createdAt!)
              .toISOString()
              .split('T')[0]
              .replaceAll('-', '')}-${clientId}-${ref || createdAt}`,
            type,
            color,
            refractiveIndex,
            status: status ? STATUS_LEGEND[status] : 'Pendente',
            spherical: (
              <>
                <strong>D: </strong>
                {rightEye?.spherical || '--'}
                <br />
                <strong>E: </strong>
                {leftEye?.spherical || '--'}
              </>
            ),
            cylinder: (
              <>
                <strong>D: </strong>
                {rightEye?.cylinder || '--'}
                <br />
                <strong>E: </strong>
                {leftEye?.cylinder || '--'}
              </>
            ),
            addition: (
              <>
                <strong>D: </strong>
                {rightEye?.addition || '--'}
                <br />
                <strong>E: </strong>
                {leftEye?.addition || '--'}
              </>
            ),
            axis: (
              <>
                <strong>D: </strong>
                {rightEye?.axis || '--'}
                <br />
                <strong>E: </strong>
                {leftEye?.axis || '--'}
              </>
            ),
          })
        ) as TRowData
      }
    />
  </Box>
);

export default OrderTable;
