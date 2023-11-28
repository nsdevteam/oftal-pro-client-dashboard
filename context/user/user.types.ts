import { User } from 'firebase/auth';

import { IClient } from '../../interface';

export interface IUserContext {
  loading: boolean;
  userData: IClient;
  userAuth: User | null;
  forceVerifyLogin: () => void;
}
