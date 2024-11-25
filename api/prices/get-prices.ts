
import { getDocument } from '../../utils/helpers';
import { TGetPrices } from './prices.protocol';
import { pricesCollectionName } from './prices.utils';

const getPrices: TGetPrices = (docId) =>
  getDocument(pricesCollectionName, docId).catch((error) => error);   

export default getPrices;
