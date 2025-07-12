import { WithUid } from 'burnbase/firestore';
import { FC, useCallback, useEffect, useState, memo } from 'react';
import toast from 'react-hot-toast';
import { FiPlus, FiShoppingCart, FiTrash } from 'react-icons/fi';
import { updateOrder } from '../../api/orders';
import deleteOrder from '../../api/orders/delete-order';
import getAllOrders from '../../api/orders/get-all-orders';
import { useUser } from '../../context/user';
import { Button, Typography } from '../../elements';
import useRerender from '../../hooks/use-rerender';
import { IOrder, orderStatusEnum } from '../../interface';
import OrderForm from './order-form';
import { OrdersProps } from './orders.types';
import OrderTable from './orders-table';
import OrdersMobile from './orders-mobile';
import FilterInput from '../../elements/filter-input';
import { COLOR_LEGEND, STATUS_LEGEND, TYPE_LEGEND } from './order-form/order-form.data';
import PaymentsFrame from '../payments/payments-frame';
import PaymentsOnTime from '../payments/payments-on-time';
import OrdersView from './orders-view';

const Orders: FC<OrdersProps> = ({ status }) => {
  const { userData } = useUser();
  const { renderer, rerender } = useRerender();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewOrderOpen, setIsViewOrderOpen] = useState(false);
  const [isPaymentFrameOpened, setIsPaymentFrameOpened] = useState<boolean>(false);
  const [paymentsFrameId, setPaymenstFrameId] = useState<string | null>(null);
  const [orders, setOrders] = useState<ReadonlyArray<WithUid<IOrder>>>([]);
  const [filterOrders, setFilterOrders] = useState<any>([]);
  const [ordersByStatus, setOrdersByStatus] = useState<ReadonlyArray<WithUid<IOrder>>>([]);
  const [selectDoc, setSelectedDoc] = useState<WithUid<IOrder> | null>(null);
  const [selectedList, setSelectedList] = useState<ReadonlyArray<string>>([]);

  useEffect(() => {
    getAllOrders({
      conditions: [
        ['clientId', '==', userData?.clientId],
        ['status', '==', status],
      ],
    }).then((orders: any) => {
      setOrders(orders); // Set all orders
      //SORT Orders Helper
      const sortOrders = (a: any, b: any) => {
        if (a?.createdAt > b?.createdAt) {
          return 1;
        } else if (a?.createdAt < b?.createdAt) {
          return -1;
        } else {
          return 0;
        }
      }
      const _orderByStatus = [...(orders?.filter((item: any) => item?.status === status))]?.sort(sortOrders)?.reverse();
      setOrdersByStatus(_orderByStatus); // Set orders by status  
      setFilterOrders(_orderByStatus);
    });
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

  const mapKeysByData = (item: WithUid<IOrder>) => {
    //@ts-ignore
    console.log("Status ::: ", item, STATUS_LEGEND[item.status])
    return {
      ...item,
      ref: `${new Date(item?.createdAt || '')
        .toISOString()
        .split('T')[0]
        .replace(/-/g, '')}-${item.clientId}-${item.ref || item.createdAt}`,
      type: TYPE_LEGEND[item.type] || '',
      color: COLOR_LEGEND[item.color] || '',
      refractiveIndex: item.refractiveIndex,
      status: STATUS_LEGEND[item.status]
    }
  }

  // Use useCallback to prevent re-creating the function on every render
  const handleSearchFilter = (result: any) => {
    setFilterOrders(result);
  }

  const onRequestPayment = async (orderId: string, amount: number) => {
    return fetch(`http://localhost:3200/api/payments/web/frame`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount,
        orderId
      })
    }).then(res => res.json()).then(res => {
      if (res?.data?.id) {
        setPaymenstFrameId(res?.data?.id);
        setTimeout(() => {
          setIsPaymentFrameOpened(true);
        }, 300)
      }
    }).catch((error) => {
      console.error("Failed to retrieve payment's frame", error);
    })
  }
  const onRequestPaymentOnTime = async () => {
    setTimeout(() => {
      setIsPaymentFrameOpened(true);
    }, 2000)
  }

  //Function handles type of modal to be opened; 
  //If an order is not completed or not ordered it will open an editable modal; 
  //If Ordered it will open a read-only modal with commercial options
  const handleViewOrderSelection = (order: WithUid<IOrder>) => {
    if (order?.id) {
      setSelectedDoc(order);
    }
    if (order?.status === orderStatusEnum.Pendente) {
      //Order has not been placed
      //Order is editable
      setIsFormOpen(true);
    } else {
      setIsViewOrderOpen(true);
    }
  }

  return (
    <div className='view-wrapper orders-wrapper'>
      <div>
        <Typography className='page-title' as="h2" mb={30}>
          {status === orderStatusEnum.Pendente ? 'Pedidos Pendentes' : 'Pedidos Concluídos / Ocorrência'}
        </Typography>
        {status === orderStatusEnum.Pendente && (
          <div className='order-options'>
            <Button className='option-btn' mt="L" onClick={() => setIsFormOpen(true)}>
              <Typography as="span">Novo pedido</Typography>
              <Typography as="span" ml="M">
                <FiPlus size={18} color="#FFF" />
              </Typography>
            </Button>
            <Button
              className='option-btn'
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
              className='option-btn'
              mt="L"
              bg={selectedList.length ? '#DC2626' : '#686868'}
              onClick={() => selectedList.length && bulkDelete()}
            >
              <Typography as="span">Apagar</Typography>
              <Typography as="span" ml="M">
                <FiTrash size={18} color="#FFF" />
              </Typography>
            </Button>
          </div>
        )}
      </div>
      <div className='view-content orders-content'>
        <div className='dis-dk'>
          <OrderTable
            setSelectedDoc={handleViewOrderSelection}
            customData={orders}
            data={ordersByStatus}
            setSelectedList={setSelectedList}
            selectedList={selectedList}
            displaySelectCheckbox={status === orderStatusEnum?.Encomendado ? false : true}
          />
        </div>
        <div className='dis-mb'>
          <FilterInput mapKeysFn={mapKeysByData} data={ordersByStatus} onFilter={handleSearchFilter} />
          <OrdersMobile
            setSelectedList={setSelectedList}
            selectedList={selectedList}
            customData={orders}
            setSelectedDoc={handleViewOrderSelection}
            data={filterOrders}
          />
        </div>
      </div>
      {/* New Order */}
      <div className='view-modal-silent'>
        {isFormOpen && (
          <OrderForm
            doc={selectDoc}
            isEditable={status === orderStatusEnum.Pendente}
            closeForm={() => {
              rerender();
              setIsFormOpen(false);
              setSelectedDoc(null);
            }}
            requestPayment={(orderId: string, total: number) => onRequestPaymentOnTime()}
          />
        )}
      </div>
      {/* View Order Read-Only */}
      <div className='view-modal-silent'>
        {isViewOrderOpen && (
          <OrdersView
            /*@ts-ignore*/
            data={selectDoc}
            closeForm={() => {
              rerender();
              setIsViewOrderOpen(false);
              setSelectedDoc(null);
            }}
            requestPayment={() => onRequestPaymentOnTime()}
          />
        )}

      </div>
      <div className='view-modal-silent'>
        {
          isPaymentFrameOpened && (<PaymentsOnTime data={
            {
              amount: selectDoc?.total || 0,
              clientId: userData?.id || "",
              orderId: selectDoc?.id || ""
            }
          } closeForm={() => {
            setIsPaymentFrameOpened(false);
            setPaymenstFrameId(null);
          }} />)
        }
      </div>
    </div>
  );
};

export default memo(Orders);
