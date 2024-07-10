import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BackAPIService } from '../../services/back-api.service';
import { Observable, Subscription } from 'rxjs';
import { Advertisement } from '../../models/Advertisement';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
})
export class SearchResultComponent {
  public roomList = new Array<Advertisement>();

  constructor(private API: BackAPIService, private router: Router) {
    this.API.listOfRoomsObserver.subscribe((room) => {
      this.roomList = room;
    });
  }

  goBackToSearch() {
    this.router.navigate(['/search']);
  }
}
