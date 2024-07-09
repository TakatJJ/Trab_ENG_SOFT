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
import { FormGroup } from '@angular/forms';

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
    this.http.get('TuaURLAQui').subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  public POSTRegisterUser(newUser: RegisterUser) {
    this.http.post('TuaURLAQui', newUser).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public POSTCreateAd(AdvertisementForm: FormGroup, fotos: FormData) {
    const ad = new Advertisement(
      AdvertisementForm,
      this.storage.get('matricula'),
      Array<File>()
    );
    this.http.post('http://localhost:5121/api/Test', ad).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public async GETSearchRooms(roomOptions: RoomOptions) {
    this.listOfRooms = await this.http.get<Advertisement[]>(
      'http://localhost:5121/api/Test'
    );
    this.listOfRooms.subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
