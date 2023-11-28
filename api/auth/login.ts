import { signInWithEmailAndPassword } from 'firebase/auth';

import { getUser } from '../user';
import { auth } from '../utils';
import logout from './logout';

const login = async (email: string, password: string): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!userCredential.user.uid) throw new Error();

    getUser(userCredential.user.uid).catch(() => {
      logout();
      throw Error('Login inválido');
    });
  } catch (e) {
    throw Error('Usuário ou senha errada');
  }
};

export default login;
