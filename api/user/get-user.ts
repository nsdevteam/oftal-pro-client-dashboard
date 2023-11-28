import { getDocument } from './../utils/index';
import { TGetUser } from './user.protocol';

const collectionName = 'client';

const getUser: TGetUser = (docId) =>
  getDocument(collectionName, docId)
    .then((snapshot) => snapshot.data())
    .catch((error) => error);

export default getUser;
