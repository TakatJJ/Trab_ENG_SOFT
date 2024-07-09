import { FormGroup } from '@angular/forms';

export class Advertisement {
  title: string;
  description: string;
  price: number;
  location: string;
  numberOfRooms: number;
  matricula: number;
  fotos: Array<File>;
  constructor(FormsGroup: FormGroup, matricula: number, fotos: Array<File>) {
    this.title = FormsGroup.value.title;
    this.description = FormsGroup.value.description;
    this.price = FormsGroup.value.price;
    this.location = FormsGroup.value.location;
    this.numberOfRooms = FormsGroup.value.numberOfRooms;
    this.matricula = matricula;
    this.fotos = fotos;
  }
}
