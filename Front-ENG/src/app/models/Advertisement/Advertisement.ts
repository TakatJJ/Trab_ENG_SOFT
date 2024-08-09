import { UserLogged } from '../User/UserLogged';

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
    owner: UserLogged
    // fotos: Array<File>
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.location = location;
    this.numberOfRooms = numberOfRooms;
    this.campusProximo = campusProximo;
    this.user = owner;
    // this.fotos = fotos;
  }
}
