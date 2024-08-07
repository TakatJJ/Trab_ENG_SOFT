import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, makeStateKey } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

import { BackAPIService } from './services/back-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { DomSanitizer } from '@angular/platform-browser';
import { UserLogged } from './models/UserLogged';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  user = {} as UserLogged;
  constructor(
    private API: BackAPIService,
    private router: Router,
    private iRegister: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iRegister.addSvgIcon(
      'messageIcon',
      this.sanitizer.bypassSecurityTrustResourceUrl('message.svg')
    );
  }
  ngOnInit(): void {
    this.API.authStatus.currentState.subscribe((state) => {
      this.isLoggedIn = state.isLoggedIn;
    });
    this.API.authStatus.currentState.subscribe((state) => {
      this.user = state.user;
    });
  }

  menuItems = [
    // { name: 'Contate-nos', path: '/contact' },
    { name: 'Sobre', path: '/about' },
  ];

  onLogout() {
    this.API.authStatus.logout();
    this.API.storage.remove('loggedUser');
    this.router.navigate(['/home']);
  }
}
