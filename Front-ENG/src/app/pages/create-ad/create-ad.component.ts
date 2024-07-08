import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { courses } from '../../enums/courses';

@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css'
})
export class CreateADComponent {
  API : BackAPIService;
  constructor(private APIService:BackAPIService) 
  {
    this.API = APIService;
  }
  
  Advertisement = new FormGroup({
    title : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
    description : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(500)]),
    price : new FormControl(0,[Validators.required, Validators.min(1)]),
    location : new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(50)]),
    numberOfRooms : new FormControl(1,[Validators.required, Validators.min(1)]),
    fotos: new FormControl('', [Validators.required])
  })
  onSubmit() {
    this.API.POSTCreateAd(this.Advertisement);
  }
}
