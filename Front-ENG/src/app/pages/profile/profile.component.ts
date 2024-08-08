import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserLogged } from '../../models/UserLogged';
import { BackAPIService } from '../../services/back-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  public user!: UserLogged;
  constructor(private API: BackAPIService) {
    this.user = this.API.authStatus.getUser();
  }
}
