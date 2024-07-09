import { Injectable, makeStateKey } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  provideHttpClient,
} from '@angular/common/http';
import { delay, Observable, pipe } from 'rxjs';
import { AuthService } from './auth-service.service';
import { LocalStorageService } from './local-storage.service';
import { Advertisement } from '../models/Advertisement';
import { RegisterUser } from '../models/RegisterUser';
import { UserLogin } from '../models/UserLogin';
import { RoomOptions } from '../models/RoomOptions';
import fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class BackAPIService {
  authStatus: AuthService;
  storage: LocalStorageService;
  listOfRooms: Observable<Advertisement[]> = new Observable<Advertisement[]>();
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
    const AdJSON = JSON.stringify(Advertisement);
    fs.appendFile('../data/mockedRoom.json', AdJSON, (err) => {
      if (err) {
        console.log('Error writing file:', err);
      } else {
        console.log('Successfully wrote file');
      }
    });
  }

  public GETSearchRooms(roomOptions: RoomOptions) {
    const rooms = JSON.parse(
      'Front-ENG/src/app/data/mockedRooms.json'
    ) as Advertisement[];
    this.listOfRooms = new Observable<Advertisement[]>((observer) => {
      observer.next(rooms);
      observer.complete();
    });
    console.log(roomOptions);
  }
}
