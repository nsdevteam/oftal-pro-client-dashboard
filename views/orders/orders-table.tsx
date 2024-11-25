import * as React from 'react';

import { Box } from '../../elements';
import { OrdersTableProps } from './orders.types';   
import { COLOR_LEGEND, COLOR_VALUES, STATUS_LEGEND, TYPE_LEGEND } from './order-form/order-form.data';
import { ptPT } from '@mui/x-data-grid/locales';
//@ts-ignore
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
   
const columns: GridColDef[] = [
  { field: 'ref', headerName: 'Ref/Nome de pacicente', width: 300 },
  { field: 'type', headerName: 'Tipo', width: 130 },
  { field: 'refractiveIndex', headerName: 'Índice de refração', width: 130 },
  {
    field: 'color',
    headerName: 'Cor',
    type: 'string',
    width: 90,
  },
  { field: 'status', headerName: 'Estado', width: 130 },
  {
    field: 'spherical',
    headerName: 'Esférico',
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <>
        <strong>D: </strong>
        {params?.row?.rightEye?.spherical || '--'}
        <strong> E: </strong>
        {params?.row?.leftEye?.spherical || '--'}    
      </>
    ),
  },       
  {
    field: 'cylinder',
    headerName: 'Cilindro',
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <>
        <strong>D: </strong>
        {params?.row?.rightEye?.cylinder || '--'}

        <strong> E: </strong>
        {params?.row?.leftEye?.cylinder || '--'}    
      </>
    ),   
  },
  {
    field: 'addition',
    headerName: 'Adição',
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <>
        <strong>D: </strong>
        {params?.row?.rightEye?.addition || '--'}
        <strong> E: </strong>
        {params?.row?.leftEye?.addition || '--'}       
      </>
    ),
  },       
  {
    field: 'axis',
    headerName: 'Eixo',
    sortable: false,
    width: 160,
    renderCell: (params) => (
      <>
        <strong>D: </strong>
        {params?.row?.rightEye?.axis || '--'}  
        <strong> E: </strong>
        {params?.row?.leftEye?.axis || '--'}    
      </>
    ),   
  }    
];

const OrderTable: React.FC<OrdersTableProps> = ({
  data,
  onSelect,
  selectedList,
  setSelectedDoc,
}) => {

  const rows = 
    data.map(
      ({
        //@ts-ignore   
        id,
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
        id: id || 1,   
        ref: `${new Date(createdAt!)
          .toISOString()
          .split('T')[0]
          .replaceAll('-', '')}-${clientId}-${ref || createdAt}`,
        type: type ? TYPE_LEGEND[type] : '',
        color: color ? COLOR_LEGEND[color] : '',   
        refractiveIndex,
        status: status ? STATUS_LEGEND[status] : 'Pendente',
        leftEye,
        rightEye   
      })
    );

    React.useEffect(()=>{
        console.log("Rows ::: ",rows);   
    },[rows])
  
    const paginationModel = { page: 0, pageSize: 8 };

  return <>
    <Box width="100%">
    <Paper sx={{ height: "100%", width: '100%' }}>
      <DataGrid
        className='orders-table'
        rows={rows}
        columns={columns}     
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[8, 16, 32, 50]}
        checkboxSelection   
        sx={{ border: 0 }}
        rowHeight={80}
        localeText={ptPT.components.MuiDataGrid.defaultProps.localeText}  
        onRowClick={(params)=>setSelectedDoc(params?.row|| {})}       
        onRowSelectionModelChange={(params:any)=>{onSelect && onSelect(params?.row?.id || '')}}   
      />
    </Paper>
  </Box>
  </>     
}


export default OrderTable;
