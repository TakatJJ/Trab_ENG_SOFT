import { CommonModule } from '@angular/common';
import { Component, makeStateKey } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserLogin } from '../../models/UserLogin';
import { Router } from '@angular/router';
import { isValidMatricula } from '../../customValidators/isValidMatricula';
import { MatButtonModule } from '@angular/material/button';

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
    this.route.navigate(['/home']);
  }

  onClick() {
    this.API.authStatus.login();
  }
}
