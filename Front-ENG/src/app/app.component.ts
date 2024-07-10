import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, makeStateKey } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth-service.service';
import { BackAPIService } from './services/back-api.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private API: BackAPIService) {}
  ngOnInit(): void {
    this.API.authStatus.currentState.subscribe((state) => {
      this.isLoggedIn = state;
    });
  }

  menuItems = [
    // { name: 'Contate-nos', path: '/contact' },
    { name: 'Sobre', path: '/about' },
  ];

  onLogout() {
    this.API.authStatus.logout();
    this.API.storage.remove('matricula');
  }
}
