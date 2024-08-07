import { UserLogged } from './UserLogged';

export default interface LoginState {
  isLoggedIn: boolean;
  user: UserLogged;
}
