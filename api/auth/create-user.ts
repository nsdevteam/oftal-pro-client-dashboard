import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut,
  UserCredential,
} from 'firebase/auth';

import { firebaseConfig } from '../config';
import { setDocument } from './../utils/index';

const createUser = async (
  email: string,
  password: string,
  isEntity?: boolean,
  username?: string
): Promise<void> => {
  const temporaryAuth = getAuth(initializeApp(firebaseConfig, 'temporary'));

  return createUserWithEmailAndPassword(temporaryAuth, email, password)
    .then(async (user: UserCredential) => {
      await setDocument('accessData', user.user.uid, {
        email,
        state: 1,
        updateAt: Date.now(),
        createdAt: Date.now(),
        roles: isEntity ? 2 : 0,
        username: username || email.slice(0, email.indexOf('@')),
      });
      return user;
    })
    .catch((error) => error)
    .finally(() => signOut(temporaryAuth));
};

export default createUser;
