import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateADComponent } from './pages/create-ad/create-ad.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create-ad', component: CreateADComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search-result', component: SearchResultComponent },
  { path: 'profile', component: ProfileComponent },
];
