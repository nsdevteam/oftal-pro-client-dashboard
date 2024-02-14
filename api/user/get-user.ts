import { getDocument } from 'burnbase/firestore';

import { TGetUser } from './user.protocol';
import { userCollectionName } from './user.utils';

const getUser: TGetUser = (docId) =>
  getDocument(userCollectionName, docId)
    .then((snapshot) => snapshot.data())
    .catch((error) => error);

export default getUser;
