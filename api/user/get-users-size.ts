import { getCollectionSize } from '../utils';
import { TGetUsersSize } from './user.protocol';

const userCollectionName = 'client';

const getEntitiesSize: TGetUsersSize = (setter, queryParams) =>
  getCollectionSize(userCollectionName, setter, queryParams);

export default getEntitiesSize;
