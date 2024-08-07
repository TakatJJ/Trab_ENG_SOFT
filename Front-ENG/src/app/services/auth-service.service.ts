import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import LoginState from '../models/LoginState';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  state$: BehaviorSubject<LoginState>;
  currentState: Observable<LoginState>;
  constructor() {
    this.state$ = new BehaviorSubject({
      isLoggedIn: false,
      typeOfUser: '',
    } as LoginState);
    console.log('CRIEI');
    this.currentState = this.state$.asObservable();
  }
  isLoggedIn() {
    return this.state$.getValue();
  }

  login(UserType: string) {
    this.state$.next({ isLoggedIn: true, typeOfUser: UserType });
  }

  logout() {
    this.state$.next({ isLoggedIn: false, typeOfUser: '' });
  }
}
