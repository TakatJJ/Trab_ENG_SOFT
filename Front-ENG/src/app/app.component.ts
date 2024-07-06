import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  menuItems = [
    { name: 'Criar Anúncios', path: '/create' },
    { name: 'Procurar Anúncios', path: '/search'},
    { name: 'Login', path: '/login' },
    { name: 'Cadastrar', path: '/register' },
    { name: 'Contate-nos', path: '/contact' },
    { name: 'Sobre', path: '/about' },
  ];
}
