
import { updateDocument } from '../../utils/helpers';
import { userCollectionName } from './user.utils';

const updateUser: any = (uid:string, docData:any) =>
  updateDocument(userCollectionName, uid, docData);

export default updateUser;
