import { signOut } from 'firebase/auth';

import { auth } from '../utils';

const logout = (): Promise<void> => signOut(auth);

export default logout;
