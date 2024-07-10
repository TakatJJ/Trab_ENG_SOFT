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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
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
    ]),
    senha: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.userLogin.valid);
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
