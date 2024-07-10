import { Component } from '@angular/core';
import { BackAPIService } from '../../services/back-api.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { Campus } from '../../enums/Campus';
import { Router } from '@angular/router';
import { RoomOptions } from '../../models/RoomOptions';
import { Advertisement } from '../../models/Advertisement';
import { AdvertisementInterface } from '../../interface/Advertisement';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatSliderModule,
    MatButtonModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  private API: BackAPIService;
  private router: Router;

  constructor(APIService: BackAPIService, routerService: Router) {
    this.API = APIService;
    this.router = routerService;
  }

  filters = new FormGroup({
    campus: new FormControl('', [Validators.required]),
    minPrice: new FormControl(200, [Validators.required]),
    maxPrice: new FormControl(2000, [Validators.required]),
    numberOfRoommates: new FormControl(0, [Validators.required]),
    sameGender: new FormControl(false),
  });

  campusList = Campus;
  onSearch() {
    if (this.filters.valid) {
      this.Search();
    }
  }

  Search() {
    const newRoomOptions = new RoomOptions(this.filters);
    this.API.GETSearchRooms(newRoomOptions);
    this.router.navigate(['/search-result']);
  }
  get(param: string): any {
    return this.filters.get(param);
  }
}
