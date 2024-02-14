import { getPagination } from 'burnbase/firestore';

import { IClient } from '../../interface';
import { TGetUsers } from './user.protocol';
import { userCollectionName } from './user.utils';

const getUsers: TGetUsers = getPagination<IClient>(
  userCollectionName
) as TGetUsers;

export default getUsers;
