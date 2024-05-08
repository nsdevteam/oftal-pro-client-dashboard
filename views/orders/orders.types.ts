import { WithUid } from 'burnbase/firestore';

import { IOrder, orderStatusEnum } from '../../interface';

export interface OrdersTableProps {
  data: ReadonlyArray<WithUid<IOrder>>;
  setSelectedDoc: (data: WithUid<IOrder>) => void;
}

export interface OrdersProps {
  status: orderStatusEnum;
}
