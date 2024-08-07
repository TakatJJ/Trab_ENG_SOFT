import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import LoginState from '../models/LoginState';
import { UserLogged } from '../models/UserLogged';
import { DEFAULT_LOGOUT } from '../enums/DEFAULT_LOGOUT';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  state$: BehaviorSubject<LoginState>;
  currentState: Observable<LoginState>;
  constructor() {
    this.state$ = new BehaviorSubject<LoginState>({
      isLoggedIn: false,
      user: {} as UserLogged,
    });
    console.log('CRIEI');
    this.currentState = this.state$.asObservable();
  }
  isLoggedIn() {
    return this.state$.getValue();
  }

  login(User: UserLogged) {
    this.state$.next({ isLoggedIn: true, user: User });
  }

  logout() {
    this.state$.next({ isLoggedIn: false, user: DEFAULT_LOGOUT });
  }
}
