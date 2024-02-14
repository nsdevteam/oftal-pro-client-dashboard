import { updateDocument } from 'burnbase/firestore';

import { IClient } from '../../interface';
import { TUpdateUser } from './user.protocol';
import { userCollectionName } from './user.utils';

const updateUser: TUpdateUser = (uid, docData) =>
  updateDocument<IClient>(userCollectionName, uid, docData);

export default updateUser;
