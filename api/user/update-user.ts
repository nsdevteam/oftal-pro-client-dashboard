import { IClient } from '../../interface';
import { updateDocument } from '../utils';
import { TUpdateUser } from './user.protocol';

export const userCollectionName = 'accessData';

const updateUser: TUpdateUser = (uid, docData) =>
  updateDocument<IClient>(userCollectionName, uid, docData);

export default updateUser;
