import { WithUid } from 'burnbase/firestore';

import { IOrder } from '../../interface';

export interface OrdersTableProps {
  data: ReadonlyArray<IOrder>;
  setSelectedDoc: (data: WithUid<IOrder>) => void;
}
