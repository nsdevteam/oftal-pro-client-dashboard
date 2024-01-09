import { getAllData } from 'burnbase/firestore';

import { IOrder } from '../../interface';

const ordersCollectionName = 'orders';

const getAllOrders = getAllData<IOrder>(ordersCollectionName);

export default getAllOrders;
