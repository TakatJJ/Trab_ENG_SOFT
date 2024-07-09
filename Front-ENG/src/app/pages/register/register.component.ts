import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Generos } from '../../enums/generos';
import { courses } from '../../enums/courses';
import { CommonModule } from '@angular/common';
import { RegisterUser } from '../../models/RegisterUser';
import { isUfrgsEmail } from '../../customValidators/isUfrgsEmail';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private API: BackAPIService) {}
  user = new FormGroup({
    matricula: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(8),
    ]),
    senha: new FormControl('', Validators.required),
    curso: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      isUfrgsEmail(),
    ]),
    genero: new FormControl('', Validators.required),
  });
  cursos = courses;
  generos = Generos;

  onSubmit() {
    if (this.user.valid) {
      this.registerUser();
    }
  }

  registerUser() {
    const newUser = new RegisterUser(this.user);
    this.API.POSTRegisterUser(newUser);
  }

  get(param: string): any {
    return this.user.get(param);
  }
}
