import { CommonModule } from '@angular/common';
import { Component, makeStateKey } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    public API: BackAPIService,
  ) 
  {}

  matricula = new FormControl(0,[Validators.required, Validators.minLength(6), Validators.maxLength(8)]);
  senha = new FormControl("",[Validators.required]);

  onSubmit() {
    this.API.GETLoginResponse(this.matricula.value!, this.senha.value!);
  }

  onClick() {
    this.API.authStatus.login();
    // console.log(this.API.storage.get("matricula"));
  }
}
