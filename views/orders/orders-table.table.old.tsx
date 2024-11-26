import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '../../elements';
import { OrdersTableProps } from './orders.types';   
import { COLOR_LEGEND, COLOR_VALUES, STATUS_LEGEND, TYPE_LEGEND } from './order-form/order-form.data';

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

const OrderTable: React.FC<OrdersTableProps> = ({
  data,
  onSelect,
  selectedList,
  setSelectedDoc,
}) => {

  const _data = 
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
        type: type ? TYPE_LEGEND[type] : '',
        color: color ? COLOR_LEGEND[color] : '',   
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
    );
  return <>
    <Box width="100%">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{HEADINGS?.ref}</TableCell>
            <TableCell align="right">{HEADINGS?.type}</TableCell>
            <TableCell align="right">{HEADINGS?.refractiveIndex}</TableCell>
            <TableCell align="right">{HEADINGS?.color}</TableCell>
            <TableCell align="right">{HEADINGS?.status}</TableCell>
            <TableCell align="right">{HEADINGS?.spherical}</TableCell>
            <TableCell align="right">{HEADINGS?.cylinder}</TableCell>
            <TableCell align="right">{HEADINGS?.axis}</TableCell>    
            <TableCell align="right">{HEADINGS?.addition}</TableCell>    
          </TableRow>
        </TableHead>
        <TableBody>
          {_data.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ref}
              </TableCell>
            <TableCell align="right">{row?.type}</TableCell>
            <TableCell align="right">{row?.refractiveIndex}</TableCell>
            <TableCell align="right">{row?.color}</TableCell>
            <TableCell align="right">{row?.status}</TableCell>
            <TableCell align="right">{row?.spherical}</TableCell>
            <TableCell align="right">{row?.cylinder}</TableCell>
            <TableCell align="right">{row?.axis}</TableCell>    
            <TableCell align="right">{row?.addition}</TableCell>     
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  </>  
}


export default OrderTable;
