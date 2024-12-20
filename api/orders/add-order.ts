import { addDoc } from 'firebase/firestore';

import { IClient, IOrder } from '../../interface';   
import { addFile, ordersDatabase } from '../../utils/helpers';

const addOrder = async ({
  precals,
  recipes,
  ...order
}: IOrder & Pick<IClient, 'clientId'> & { total: number }): Promise<void> => {
  const recipe =
    recipes && Array.from(recipes)[0]
      ? await addFile(Array.from(recipes)[0], 'recipes', {
          prefix: '',
          suffix: '',
        })
      : undefined;    

  const precal =
    precals && Array.from(precals)[0]
      ? await addFile(Array.from(precals)[0], 'precals', {
          prefix: '',
          suffix: '',
        })
      : undefined;

  addDoc(ordersDatabase, {
    ...order,
    status: 0,
    recipe: recipe ?? '',
    precal: precal ?? '',
    createdAt: Date.now(),
  });
};

export default addOrder;
