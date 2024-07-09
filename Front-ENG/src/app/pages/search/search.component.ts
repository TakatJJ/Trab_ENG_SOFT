import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, MatSliderModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private API : BackAPIService;
  constructor
  (
    APIService: BackAPIService,
  ) 
  {
    this.API = APIService;
  }
  
  filters = new FormGroup({
    campus: new FormControl('', [Validators.required]),
    minPrice: new FormControl(200, [Validators.required]),
    maxPrice: new FormControl(2000, [Validators.required]),
    numberOfRoommates: new FormControl(0,),
    sameGender: new FormControl(false),
  });
  onSearch() {
    console.log(this.filters.value);
  }
}
