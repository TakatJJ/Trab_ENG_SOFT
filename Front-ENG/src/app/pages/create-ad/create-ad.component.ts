import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Advertisement } from '../../models/Advertisement';

@Component({
  selector: 'app-create-ad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-ad.component.html',
  styleUrl: './create-ad.component.css',
})
export class CreateADComponent {
  private API: BackAPIService;
  constructor(APIService: BackAPIService) {
    this.API = APIService;
  }

  fotos: Array<File> = [];

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
    price: new FormControl(1, [Validators.required, Validators.min(1)]),
    location: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
    ]),
    numberOfRooms: new FormControl(1, [Validators.required, Validators.min(1)]),
  });
  onSubmit() {
    console.log(this.Advertisement.value);
    if (this.Advertisement.valid) {
      this.createAd();
    }
  }

  createAd() {
    const newAD = new Advertisement(
      this.Advertisement,
      this.API.storage.get('matricula'),
      this.fotos
    );
    this.API.POSTCreateAd(newAD);
  }

  get(param: string): any {
    return this.Advertisement.get(param);
  }

  onChange(event: any) {
    if (event.target.files.length > 0) {
      this.fotos = [];
      const fileArray: FileList = event.target.files;
      for (let i = 0; i < fileArray.length; i++) {
        this.fotos.push(fileArray[i]);
      }
    }
  }
}
