import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BackAPIService } from '../../services/back-api.service';
import { Observable, Subscription } from 'rxjs';
import { Advertisement } from '../../models/Advertisement';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatGridListModule],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
})
export class SearchResultComponent {
  public roomList = new Array<Advertisement>();
  constructor(private API: BackAPIService) {
    this.API.listOfRoomsObserver.subscribe((room) => {
      this.roomList = room;
    });
  }
}
