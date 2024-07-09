import { Injectable, makeStateKey } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  provideHttpClient,
} from '@angular/common/http';
import { delay, pipe } from 'rxjs';
import { AuthService } from './auth-service.service';
import { LocalStorageService } from './local-storage.service';
import { Advertisement } from '../models/Advertisement';
import { RegisterUser } from '../models/RegisterUser';
import { UserLogin } from '../models/UserLogin';
import { RoomOptions } from '../models/RoomOptions';

@Injectable({
  providedIn: 'root',
})
export class BackAPIService {
  authStatus: AuthService;
  storage: LocalStorageService;
  constructor(
    public http: HttpClient,
    private authService: AuthService,
    private LocalStorage: LocalStorageService
  ) {
    this.authStatus = authService;
    this.storage = LocalStorage;
  }

  public GETLoginResponse(user: UserLogin) {
    this.authStatus.login();
    this.storage.set(makeStateKey('matricula'), user.getID());
    delay(5000);
  }
  public POSTRegisterUser(newUser: RegisterUser) {
    this.LocalStorage.set(makeStateKey('matricula'), newUser.getID());
    this.authStatus.login();
    delay(5000);
  }

  public POSTCreateAd(Advertisement: Advertisement) {
    delay(5000);
  }

  public GETRooms(roomOptions: RoomOptions) {
    console.log(roomOptions);
  }
}
