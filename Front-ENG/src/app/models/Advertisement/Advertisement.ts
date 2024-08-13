import { UserLogged } from '../User/UserLogged';
import { UserOwner } from '../User/UserOwner';

export class Advertisement {
  title: string;
  description: string;
  price: number;
  location: string;
  numberOfRooms: number;
  nearestCampus: string;
  owner: UserOwner;
  foto: string;
  constructor(
    title: string,
    description: string,
    price: number,
    location: string,
    numberOfRooms: number,
    nearestCampus: string,
    owner: UserLogged,
    foto: string
  ) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.location = location;
    this.numberOfRooms = numberOfRooms;
    this.nearestCampus = nearestCampus;
    this.owner = this.resolveOwner(owner);
    this.foto = foto;
  }

  resolveOwner(owner: UserLogged): UserOwner {
    return {
      matricula: owner.matricula,
      curso: owner.curso,
      email: owner.email,
      genero: owner.genero,
    } as UserOwner;
  }
}
