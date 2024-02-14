import { User } from 'firebase/auth';

import { IClient, IUserPrices } from '../../interface';

export interface IUserContext {
  loading: boolean;
  userAuth: User | null;
  userData: IClient | null;
  prices: IUserPrices | null;
  forceVerifyLogin: () => void;
}
