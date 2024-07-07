import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  state$: BehaviorSubject<boolean>;
  currentState: Observable<boolean>;
  constructor() 
  {
    this.state$ = new BehaviorSubject(false);
    console.log("CRIEI")
    this.currentState = this.state$.asObservable();
  }
  isLoggedIn() {
    return this.state$.getValue();
  }

  login() {
    this.state$.next(true);
  }

  logout() {
    this.state$.next(false);
  }
}
