import dataGetter from '../utils/data-getter';
import { IClient } from './../../interface';

const userCollectionName = 'client';

const getAllUsers = dataGetter<IClient>(userCollectionName);

export default getAllUsers;
