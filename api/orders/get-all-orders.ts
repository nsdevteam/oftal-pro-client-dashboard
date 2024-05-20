import { getAllData } from 'burnbase/firestore';

import { IOrder } from '../../interface';
import { orderCollectionName } from './orders.utils';

const getAllOrders = getAllData<IOrder>(orderCollectionName);

export default getAllOrders;
