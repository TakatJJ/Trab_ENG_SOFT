import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BackAPIService } from '../../services/back-api.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { AdvertisementRESPONSE } from '../../models/Advertisement/AdvertisementRESPONSE';
import { MatDialog } from '@angular/material/dialog';
import { ProposeDialogComponent } from '../../components/propose-dialog/propose-dialog.component';

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
  public roomList = new Array<AdvertisementRESPONSE>();
  readonly dialog = inject(MatDialog);

  constructor(private API: BackAPIService, private router: Router) {
    this.API.listOfRoomsObserver.subscribe((room) => {
      this.roomList = room;
    });
  }

  openDialog(room: AdvertisementRESPONSE) {
    this.dialog.open(ProposeDialogComponent, { data: { room: room } });
  }

  goBackToSearch() {
    this.router.navigate(['/search']);
  }
}
