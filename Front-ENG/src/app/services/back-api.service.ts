import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth-service.service';

import { Advertisement } from '../models/Advertisement/Advertisement';
import { RegisterUser } from '../models/User/RegisterUser';
import { UserLogin } from '../models/User/UserLogin';
import { RoomOptions } from '../models/RoomOptions';
import { FormGroup } from '@angular/forms';
import { MockResponsesService } from './mock-responses.service';
import { Router } from '@angular/router';

import { userLoginResponse } from '../models/User/UserLoginResponse';
import { AdvertisementRESPONSE } from '../models/Advertisement/AdvertisementRESPONSE';
import { UserLogged } from '../models/User/UserLogged';
import { Proposta } from '../models/Proposta/Proposta';

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
    this.http.post(`http://localhost:8080/users/login`, user).subscribe(
      (res) => {
        const userLoginResponseOBJ: UserLogged = res as UserLogged;
        if (userLoginResponseOBJ != null) {
          this.authStatus.login(userLoginResponseOBJ);
          this.router.navigate(['/home']);
        }
      },
      (err) => {
        console.log(err);
        alert('Erro ao fazer login');
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
        const registerUserResponseOBJ: UserLogged = res as UserLogged;
        if (registerUserResponseOBJ != null) {
          this.authStatus.login(registerUserResponseOBJ);
        }
      },
      (err) => {
        console.log(err);
        alert('Erro ao registrar usuário');
      }
    );
  }

  public POSTCreateAd(AdvertisementForm: FormGroup, foto: string) {
    const ad = new Advertisement(
      AdvertisementForm.get('title')!.value,
      AdvertisementForm.get('description')!.value,
      AdvertisementForm.get('price')!.value,
      AdvertisementForm.get('location')!.value,
      AdvertisementForm.get('numberOfRooms')!.value,
      AdvertisementForm.get('nearestCampus')!.value,
      this.authService.getUser() as UserLogged,
      foto
    );
    console.log(ad);

    this.http.post('http://localhost:8080/anuncios', ad).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
        alert('Erro ao criar anúncio');
      }
    );
  }

  public GETSearchRooms(roomOptions: RoomOptions) {
    this.http
      .get(
        `http://localhost:8080/anuncios/price?minPreco=${roomOptions.minPrice}&maxPreco=${roomOptions.maxPrice}`
      )
      .subscribe(
        (res) => {
          this.listOfRooms$.next(res as Array<AdvertisementRESPONSE>);
          console.log(res);
        },
        (err) => {
          console.log(err);
          alert('Erro ao buscar quartos');
        }
      );
    // this.listOfRooms$.next(
    //   JSON.parse(this.mockData.getRoomData()) as Array<AdvertisementRESPONSE>
    // );

    // console.log(this.listOfRooms$.value);
    // return JSON.parse(
    //   this.mockData.getRoomData()
    // ) as Array<AdvertisementRESPONSE>;
  }

  POSTPropose(LocatárioID: number, LocadorID: number, RoomId: number) {
    const propose: Proposta = {
      idLocador: LocadorID,
      idLocatario: LocatárioID,
      state: 'Pendente',
      idQuarto: RoomId,
    };

    this.http.post('http://localhost:8080/proposals', propose).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
        alert('Erro ao fazer proposta');
      }
    );
  }

  PUTPropose(proposta: Proposta) {
    this.http.put(`http://localhost:8080/proposals`, proposta).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
        alert('Erro ao aceitar/Rejeitar proposta');
      }
    );
  }

  DELETEPropose(propostaID: number) {
    this.http.delete(`http://localhost:8080/proposals/${propostaID}`).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
        alert('Erro ao deletar proposta');
      }
    );
  }
}
