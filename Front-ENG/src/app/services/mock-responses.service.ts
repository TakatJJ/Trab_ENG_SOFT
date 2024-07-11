import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from '../models/Advertisement';

@Injectable({
  providedIn: 'root',
})
export class MockResponsesService {
  public roomData: string = `
  [
      {
        "title": "Apartamento 1",
        "description": "Apartamento de 2 quartos, sala, cozinha e banheiro",
        "price": 1000,
        "location": "Rua 1, Bairro 1, Cidade 1",
        "numberOfRooms": 2,
        "matricula": "123456"
      },
      {
        "title": "Apartamento 2",
        "description": "Apartamento de 3 quartos, sala, cozinha e banheiro",
        "price": 1500,
        "location": "Rua 2, Bairro 2, Cidade 2",
        "numberOfRooms": 3,
        "matricula": "654321"
      },
      {
        "title": "Apartamento 3",
        "description": "Apartamento de 4 quartos, sala, cozinha e banheiro",
        "price": 2000,
        "location": "Rua 3, Bairro 3, Cidade 3",
        "numberOfRooms": 4,
        "matricula": "987654"
      },
      {
        "title": "Apartamento 4",
        "description": "Apartamento de 5 quartos, sala, cozinha e banheiro",
        "price": 200,
        "location": "Rua 4, Bairro 4, Cidade 4",
        "numberOfRooms": 5,
        "matricula": "456789"
      },
      {
        "title": "Apartamento 5",
        "description": "Apartamento de 6 quartos, sala, cozinha e banheiro",
        "price": 1200,
        "location": "Rua 5, Bairro 5, Cidade 5",
        "numberOfRooms": 6,
        "matricula": "789123"
      },
      {
        "title": "Apartamento 6",
        "description": "Apartamento de 7 quartos, sala, cozinha e banheiro",
        "price": 300,
        "location": "Rua 6, Bairro 6, Cidade 6",
        "numberOfRooms": 7,
        "matricula": "321789"
      },
      {
        "title": "Apartamento 7",
        "description": "Apartamento de 8 quartos, sala, cozinha e banheiro",
        "price": 400,
        "location": "Rua 7, Bairro 7, Cidade 7",
        "numberOfRooms": 8,
        "matricula": "987321"
      },
      {
        "title": "Apartamento 8",
        "description": "Apartamento de 9 quartos, sala, cozinha e banheiro",
        "price": 450,
        "location": "Rua 8, Bairro 8, Cidade 8",
        "numberOfRooms": 9,
        "matricula": "321654"
        
      },
      {
        "title": "Apartamento 9",
        "description": "Apartamento de 10 quartos, sala, cozinha e banheiro",
        "price": 500,
        "location": "Rua 9, Bairro 9, Cidade 9",
        "numberOfRooms": 10,
        "matricula": "654987"
      }
    ]`;

  constructor() {}

  getRoomData(): string {
    return this.roomData;
  }
}
