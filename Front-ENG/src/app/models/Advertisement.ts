import { FormGroup } from '@angular/forms';
import { RegisterUser } from './RegisterUser';
import { BehaviorSubject } from 'rxjs';
import { UserLogged } from './UserLogged';

export class Advertisement {
  title: string;
  description: string;
  price: number;
  location: string;
  numberOfRooms: number;
  campusProximo: string;
  user: UserLogged;
  // fotos: Array<File>;
  constructor(
    title: string,
    description: string,
    price: number,
    location: string,
    numberOfRooms: number,
    campusProximo: string,
    user: UserLogged
    // fotos: Array<File>
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.location = location;
    this.numberOfRooms = numberOfRooms;
    this.campusProximo = campusProximo;
    this.user = user;
    // this.fotos = fotos;
  }
}
