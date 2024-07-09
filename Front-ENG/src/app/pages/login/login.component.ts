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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public API: BackAPIService) {}
  userLogin = new FormGroup({
    matricula: new FormControl(0, [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8),
    ]),
    senha: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.userLogin.valid) {
      this.loginUser();
    }
  }

  loginUser() {
    const user = new UserLogin(this.userLogin);
    this.API.GETLoginResponse(user);
  }

  onClick() {
    this.API.authStatus.login();
  }
}
