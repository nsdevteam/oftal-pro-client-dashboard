import { updatePassword, User } from 'firebase/auth';

const setPassword = (currentUser: User, password: string): Promise<void> =>
  updatePassword(currentUser, password);

export default setPassword;
