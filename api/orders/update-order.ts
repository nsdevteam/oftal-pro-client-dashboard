import { updateDocument } from 'firebase/firestore';


import { IOrder } from '../../interface';
import { orderCollectionName } from './orders.utils';
import { addFile, deleteFile } from '../../utils/helpers';

const updateOrder = async ({
  docId,
  precals,
  recipes,
  ...order
}: Partial<IOrder & { total: number }> & {
  docId: string;
}): Promise<void> => {
  const recipe =
    recipes && Array.from(recipes)[0]
      ? await addFile(Array.from(recipes)[0], 'recipes', {
          prefix: '',
          suffix: '',
        }).then((response) => {
          if (order.recipe) deleteFile(order.recipe);

          return response;
        })
      : order.recipe ?? '';

  const precal =
    precals && Array.from(precals)[0]
      ? await addFile(Array.from(precals)[0], 'precals', {
          prefix: '',
          suffix: '',
        }).then((response) => {
          if (order.precal) deleteFile(order.precal);

          return response;
        })
      : order.precal ?? '';

  await updateDocument(orderCollectionName, docId, {
    ...order,
    ...(recipe && { recipe }),
    ...(precal && { precal }),
    updatedAt: Date.now(),
  });
};

export default updateOrder;
