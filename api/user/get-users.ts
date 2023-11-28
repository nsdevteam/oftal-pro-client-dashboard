import { IClient } from '../../interface';
import { pageGetter } from '../utils';
import { TGetUsers } from './user.protocol';

const userCollectionName = 'client';

const getUsers: TGetUsers = pageGetter<IClient>(
  userCollectionName
) as TGetUsers;

export default getUsers;
