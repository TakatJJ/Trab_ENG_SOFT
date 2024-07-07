import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { delay, pipe } from 'rxjs';
import { AuthService } from './auth-service.service';
import { Form, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class BackAPIService {
  authStatus : AuthService;
  constructor(
    public http: HttpClient,
    private authService: AuthService
  ) 
  {
    this.authStatus = authService;
  }

  public GETLoginResponse(matricula: number, password: string){
    console.log("matricula: " + matricula + " password: " + password);
    delay(5000);
  }
  public POSTRegisterUser(user: FormGroup){
    console.log("matricula: " + user.value.matricula + " password: " + user.value.senha + " curso: " + user.value.curso + " email: " + user.value.email);
    delay(5000);
  }

  public POSTCreateAd(advertisement: FormGroup){
    console.log("advertisement: " + advertisement.value.title + " " + advertisement.value.description + " " + advertisement.value.price + " " + advertisement.value.location + " " + advertisement.value.numberOfRooms);
    delay(5000);
  }
}
