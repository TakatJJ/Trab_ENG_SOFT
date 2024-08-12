import { CommonModule } from '@angular/common';
import { Component, makeStateKey } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserLogin } from '../../models/User/UserLogin';
import { Router } from '@angular/router';
import { isValidMatricula } from '../../customValidators/isValidMatricula';
import { MatButtonModule } from '@angular/material/button';
import { TESTE_LOGIN_LOCATARIO } from '../../enums/TESTE_LOGIN_LOCATARIO';
import { TESTE_LOGIN_LOCADOR } from '../../enums/TESTE_LOGIN_LOCADOR';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public API: BackAPIService, private route: Router) {}

  userLogin = new FormGroup({
    matricula: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
      isValidMatricula(),
    ]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get(params: string): any {
    return this.userLogin.get(params);
  }

  onSubmit() {
    if (this.userLogin.valid) {
      this.loginUser();
    }
  }

  loginUser() {
    const user = new UserLogin(this.userLogin);
    this.API.GETLoginResponse(user);
  }

  onClickLocador() {
    this.API.authStatus.login(TESTE_LOGIN_LOCADOR);
  }

  onClickLocatario() {
    this.API.authStatus.login(TESTE_LOGIN_LOCATARIO);
  }
}
