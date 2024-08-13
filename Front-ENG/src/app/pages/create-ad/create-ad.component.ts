import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { Campus } from '../../enums/Campus';

@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css',
})
export class CreateADComponent {
  private API: BackAPIService;
  private foto: string = '';
  public foto2: string = '';
  constructor(APIService: BackAPIService, private router: Router) {
    this.API = APIService;
  }

  Advertisement = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(500),
    ]),
    price: new FormControl(200, [
      Validators.required,
      Validators.min(200),
      Validators.max(2000),
    ]),
    location: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(2000),
    ]),
    numberOfRooms: new FormControl(1, [Validators.required, Validators.min(1)]),
    nearestCampus: new FormControl('', [Validators.required]),
  });
  allCampus = Campus.filter((campus) => campus != 'Todos');
  onSubmit() {
    if (this.Advertisement.valid && this.foto != null) {
      this.createAd();
    }
  }

  createAd() {
    console.log(this.foto);
    this.API.POSTCreateAd(this.Advertisement, this.foto);
    this.router.navigate(['/home']);
  }

  get(param: string): any {
    return this.Advertisement.get(param);
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      this.getBase64(event.target.files[0]).then((res) => {
        this.foto = res as string;
      });
    }
  }

  getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}
