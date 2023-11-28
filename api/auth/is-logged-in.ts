import { onAuthStateChanged, User } from 'firebase/auth';

import { auth } from '../utils';

const isLoggedIn = (): Promise<User | null> =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => resolve(user || null),
      (error) => reject(error)
    );
  });

export default isLoggedIn;
