import { getPagination } from 'burnbase/firestore';

import { IClient } from '../../interface';
import { TGetUsers } from './user.protocol';

const userCollectionName = 'client';

const getUsers: TGetUsers = getPagination<IClient>(
  userCollectionName
) as TGetUsers;

export default getUsers;
