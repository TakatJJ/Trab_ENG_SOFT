import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import { User } from '../../models/user';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  providers: [BackAPIService],
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(public API: BackAPIService) {}
  matricula = new FormControl();
  senha = new FormControl();
  onSubmit() {
    console.log(
      'matricula: ' + this.matricula.value + ' password: ' + this.senha.value
    );
    this.API.getLoginResponse(this.matricula.value, this.senha.value);
  }
  onClick() {
    console.log(
      'matricula: ' + this.matricula.value + ' password: ' + this.senha.value
    );
  }
}
