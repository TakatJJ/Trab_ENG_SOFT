import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { courses } from '../../enums/courses';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule,MatSelectModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private API: BackAPIService) { }
  user = new FormGroup({
    matricula : new FormControl(0o0, [Validators.required, Validators.minLength(6), Validators.maxLength(8)]),
    senha : new FormControl('', Validators.required),
    curso : new FormControl('', Validators.required),
    email : new FormControl('',[Validators.required, Validators.email])
  })
  cursos = courses;
  
  onSubmit(){
    this.API.PostRegisterUser(this.user.value.matricula!, this.user.value.senha!, this.user.value.curso!, this.user.value.email!);
  }
}
