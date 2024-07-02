import { deleteDocument } from 'burnbase/firestore';

import { orderCollectionName } from './orders.utils';

const deleteOrder = async (docId: string): Promise<void> =>
  deleteDocument(orderCollectionName, docId);

export default deleteOrder;
