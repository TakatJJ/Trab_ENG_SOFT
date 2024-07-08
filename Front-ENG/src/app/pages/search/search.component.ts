import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
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
    priceRange: new FormControl(1, [Validators.required, Validators.min(1)]),
    numberOfRoommates: new FormControl(0,),
    sameGender: new FormControl(false),
  });

}
