import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth-service.service';
import { LocalStorageService } from './local-storage.service';
import { Advertisement } from '../models/Advertisement';
import { RegisterUser } from '../models/RegisterUser';
import { UserLogin } from '../models/UserLogin';
import { RoomOptions } from '../models/RoomOptions';
import { FormGroup } from '@angular/forms';
import { MockResponsesService } from './mock-responses.service';
import { Router } from '@angular/router';

import { userLoginResponse } from '../models/UserLoginResponse';
import { AdvertisementRESPONSE } from '../models/AdvertisementRESPONSE';
import { UserLogged } from '../models/UserLogged';

@Injectable({
  providedIn: 'root',
})
export class BackAPIService {
  authStatus: AuthService;
  listOfRooms$: BehaviorSubject<AdvertisementRESPONSE[]> = new BehaviorSubject<
    AdvertisementRESPONSE[]
  >(new Array<AdvertisementRESPONSE>());
  listOfRoomsObserver = this.listOfRooms$.asObservable();

  constructor(
    public http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private mockData: MockResponsesService
  ) {
    this.authStatus = authService;
  }

  public GETLoginResponse(user: UserLogin) {
    this.http
      .get(`http://localhost:8080/users/${user.getID()}/${user.getSenha()}`)
      .subscribe(
        (res) => {
          const userLoginResponseOBJ: userLoginResponse =
            res as userLoginResponse;
          if (userLoginResponseOBJ != null) {
            this.authStatus.login(userLoginResponseOBJ);
            this.router.navigate(['/home']);
          }
        },
        (err) => {
          console.log(err);
        }
        // Implementando mensagem de erro pro Login.
        //   {
        //   this.storage.set('error', {
        //     message: 'Usuário ou senha inválidos!',
        //     state: true,
        //   });
        // }
      );
  }
  public POSTRegisterUser(newUser: RegisterUser) {
    this.http.post('http://localhost:8080/users', newUser).subscribe(
      (res) => {
        const registerUserResponseOBJ: userLoginResponse =
          res as userLoginResponse;
        if (registerUserResponseOBJ != null) {
          this.authStatus.login(registerUserResponseOBJ);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public POSTCreateAd(AdvertisementForm: FormGroup, fotos: File) {
    const ad = new Advertisement(
      AdvertisementForm.get('title')!.value,
      AdvertisementForm.get('description')!.value,
      AdvertisementForm.get('price')!.value,
      AdvertisementForm.get('location')!.value,
      AdvertisementForm.get('numberOfRooms')!.value,
      AdvertisementForm.get('')!.value,
      this.authService.getUser() as UserLogged
      // fotos
    );
    this.http.post('http://localhost:8080/anuncios', ad).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public GETSearchRooms(roomOptions: RoomOptions) {
    // this.http
    //   .get(
    //     `http://localhost:8080/anuncios/price?minPreco=${roomOptions.minPrice}&maxPreco=${roomOptions.maxPrice}`
    //   )
    //   .subscribe(
    //     (res) => {
    //       this.listOfRooms$.next(res as Array<AdvertisementRESPONSE>);
    //       console.log(res);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
    this.listOfRooms$.next(
      JSON.parse(this.mockData.getRoomData()) as Array<AdvertisementRESPONSE>
    );

    // console.log(this.listOfRooms$.value);
    return JSON.parse(
      this.mockData.getRoomData()
    ) as Array<AdvertisementRESPONSE>;
  }
}
