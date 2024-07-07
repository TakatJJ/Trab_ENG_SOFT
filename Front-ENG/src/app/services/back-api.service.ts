import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { delay, pipe } from 'rxjs';
import { AuthService } from './auth-service.service';


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

  public getLoginResponse(matricula: number, password: string){
    console.log("matricula: " + matricula + " password: " + password);
    delay(5000);
  }
  public PostRegisterUser(matricula: number, password: string, name: string, email: string){
    console.log("matricula: " + matricula + " password: " + password + " name: " + name + " email: " + email);
    delay(5000);
  }
}
