import * as React from 'react';

import { Box } from '../../elements';
import { OrdersTableProps } from './orders.types';   
import { COLOR_LEGEND, COLOR_VALUES, STATUS_LEGEND, TYPE_LEGEND } from './order-form/order-form.data';
import { ptPT } from '@mui/x-data-grid/locales';
//@ts-ignore
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
   
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
  { field: 'status',
    headerName: 'Estado',
    width: 130,
    renderCell: (params)=>(
      <>
      <div className='badge-wrapper'>
      <span className={`badge ${params?.row?.status==='Encomendado' ? 'badge-ongoing' : 'badge-warning'}`}>{params?.row?.status}</span>
      </div>
      </>
    )
   },
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
  customData,
  onSelect,
  selectedList,
  setSelectedDoc,
}) => {
  const [rows,setRows] = React.useState<any>([]);

  React.useEffect(()=>{
    const _data = [...data].map((item:any)=>{
      return {
        ...item,
        uid: item?.uid,
        id: item?.id || item?.uid,   
        ref: `${new Date(item?.createdAt!)
          .toISOString()
          .split('T')[0]
          .replaceAll('-', '')}-${item?.clientId}-${item?.ref || item?.createdAt}`,
          //@ts-ignore
        type: item?.type ? TYPE_LEGEND[item?.type] : '',
        //@ts-ignore
        color: item?.color ? COLOR_LEGEND[item?.color] : '',   
        refractiveIndex:item?.refractiveIndex,
        //@ts-ignore
        status: item?.status ? STATUS_LEGEND[item?.status] : 'Pendente',    
      }    
    }

  );
  setRows(_data);
  },[data]);
  
  const paginationModel = { page: 0, pageSize: 8 };

  const getOrder = (id:string)=>{
    //@ts-ignore
    const _doc = customData?.filter(item=>item?.id===id || item?.uid === id)?.[0] || {};     
    console.log("Requested Document ::: ",_doc);   
    return _doc;   
  }   

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
        onRowClick={(params)=>setSelectedDoc(getOrder(params?.row?.id || params?.row?.uid))}           
        onRowSelectionModelChange={(params:any)=>{onSelect && onSelect(params?.row?.id || '')}}   
      />
    </Paper>
  </Box>
  </>     
}


export default OrderTable;
