import { WithUid } from 'burnbase/firestore';

import { IOrder, orderStatusEnum } from '../../interface';

export interface OrdersTableProps {
  onSelect?: (docId: string) => void;
  selectedList?: ReadonlyArray<string>;
  setSelectedList?:any;   
  data: ReadonlyArray<WithUid<IOrder>>;
  setSelectedDoc: (data: WithUid<IOrder>) => void;
  customData?:any;
  displaySelectCheckbox?:boolean;
}

export interface OrdersProps {
  status: orderStatusEnum;
}
