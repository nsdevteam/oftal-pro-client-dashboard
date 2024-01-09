import { updateDocument } from 'burnbase/firestore';

import { IClient } from '../../interface';
import { TUpdateUser } from './user.protocol';

export const userCollectionName = 'accessData';

const updateUser: TUpdateUser = (uid, docData) =>
  updateDocument<IClient>(userCollectionName, uid, docData);

export default updateUser;
