import { addDocument } from 'burnbase/firestore';
import { addFile } from 'burnbase/storage';

import { IClient } from '../../interface';
import { IOrderForm } from '../../views/orders/order-form/order-form.types';
import { orderCollectionName } from './orders.utis';

const addOrder = async ({
  precal,
  recipe,
  ...order
}: IOrderForm &
  Pick<IClient, 'clientId'> & { total: number }): Promise<void> => {
  const recipes = await Promise.all(
    Array.from(recipe ?? []).map((file) =>
      addFile(file, 'recipes', { prefix: '', suffix: '' })
    )
  );
  const precals = await Promise.all(
    Array.from(precal ?? []).map((file) =>
      addFile(file, 'precals', { prefix: '', suffix: '' })
    )
  );

  addDocument(orderCollectionName, {
    ...order,
    precals,
    recipes,
    createdAt: Date.now(),
  });
};

export default addOrder;
