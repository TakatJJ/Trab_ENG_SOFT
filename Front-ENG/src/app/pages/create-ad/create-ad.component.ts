import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css',
})
export class CreateADComponent {
  private API: BackAPIService;
  private fotos = new Array<File>();
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
  });
  onSubmit() {
    if (this.Advertisement.valid) {
      this.createAd();
    }
  }

  createAd() {
    console.log(this.fotos);
    this.API.POSTCreateAd(this.Advertisement, this.fotos);
    this.router.navigate(['/home']);
  }

  get(param: string): any {
    return this.Advertisement.get(param);
  }

  onChange(event: any) {
    this.fotos = [];
    if (event.target.files.length > 0) {
      const fileArray: FileList = event.target.files;

      for (let i = 0; i < fileArray.length; i++) {
        this.fotos.push(fileArray[i]);
      }
    }
  }
}
