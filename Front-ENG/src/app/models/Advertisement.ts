import { FormGroup } from '@angular/forms';
import { RegisterUser } from './RegisterUser';

export class Advertisement {
  title: string;
  description: string;
  price: number;
  location: string;
  numberOfRooms: number;
  nearestCampus: string;
  user: RegisterUser;
  // fotos: Array<File>;
  constructor(
    title: string,
    description: string,
    price: number,
    location: string,
    numberOfRooms: number,
    nearestCampus: string,
    user: RegisterUser
    // fotos: Array<File>
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.location = location;
    this.numberOfRooms = numberOfRooms;
    this.nearestCampus = nearestCampus;
    this.user = user;
    // this.fotos = fotos;
  }
}
