import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import LoginState from '../models/LoginState';
import { UserLogged } from '../models/UserLogged';
import { DEFAULT_LOGOUT } from '../enums/DEFAULT_LOGOUT';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  state$: BehaviorSubject<LoginState>;
  currentState: Observable<LoginState>;
  constructor(private storage: LocalStorageService) {
    this.state$ = new BehaviorSubject<LoginState>({
      isLoggedIn: false,
      user: {} as UserLogged,
    });
    // console.log('CRIEI');
    this.currentState = this.state$.asObservable();
  }
  isLoggedIn() {
    return this.state$.getValue();
  }

  login(User: UserLogged) {
    this.state$.next({ isLoggedIn: true, user: User });
    this.storage.set('loggedUser', User);
  }

  logout() {
    this.state$.next({ isLoggedIn: false, user: DEFAULT_LOGOUT });
    this.storage.remove('loggedUser');
  }

  getUser() {
    return this.state$.getValue().user;
  }
}
