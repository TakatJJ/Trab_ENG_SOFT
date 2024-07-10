import { FormGroup } from '@angular/forms';

export class Advertisement {
  title: string;
  description: string;
  price: number;
  location: string;
  numberOfRooms: number;
  matricula: number;
  // fotos: Array<File>;
  constructor(
    title: string,
    description: string,
    price: number,
    location: string,
    numberOfRooms: number,
    matricula: number
    // fotos: Array<File>
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.location = location;
    this.numberOfRooms = numberOfRooms;
    this.matricula = matricula;
    // this.fotos = fotos;
  }
}
