import { UserLogged } from './User/UserLogged';

export default interface LoginState {
  isLoggedIn: boolean;
  user: UserLogged;
}
