import { getDocument } from 'burnbase/firestore';

import { TGetPrices } from './prices.protocol';
import { pricesCollectionName } from './prices.utils';

const getPrices: TGetPrices = (docId) =>
  getDocument(pricesCollectionName, docId)
    .then((snapshot) => snapshot.data())
    .catch((error) => error);

export default getPrices;
