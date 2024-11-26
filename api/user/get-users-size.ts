
import { getCollectionSize } from '../../utils/helpers';
import { TGetUsersSize } from './user.protocol';
import { userCollectionName } from './user.utils';

const getEntitiesSize: TGetUsersSize = () =>
  getCollectionSize(userCollectionName).catch(error=>console.error('Failed to get size of collection ::: ',error));

export default getEntitiesSize;
