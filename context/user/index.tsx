import { getLoggedInUser } from 'burnbase/auth';
import type { User } from 'firebase/auth';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';

import getPrices from '../../api/prices/get-prices';
import { getUser } from '../../api/user';
import useRerender from '../../hooks/use-rerender';
import { IClient, IUserPrices } from '../../interface';
import { IUserContext } from './user.types';

const userContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = userContext;
  const { rerender: forceVerifyLogin, renderer } = useRerender();
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<IClient | null>(null);
  const [userPrices, setUserPrices] = useState<IUserPrices | null>(null);
  const [userAuth, setUserAuth] = useState<User | null>(null);

  const handleSetUserAuth = useCallback(async (auth: User | null) => {
    auth && setUserData(await getUser(auth.uid));
    setUserAuth(auth);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (userData)
      (async () => {
        const prices = await getPrices(userData.clientId);

        setUserPrices(prices);
      })();
  }, [userData]);

  useEffect(() => {
    setLoading(true);
    getLoggedInUser().then(handleSetUserAuth).catch(toast.error);
  }, [userAuth, renderer]);

  const defaultData: IUserContext = {
    loading,
    userAuth,
    userData,
    forceVerifyLogin,
    prices: userPrices,
  };

  return <Provider value={defaultData}>{children}</Provider>;
};

export const useUser = () => useContext(userContext);

export default userContext;
