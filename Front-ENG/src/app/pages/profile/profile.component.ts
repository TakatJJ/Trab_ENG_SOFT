import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserLogged } from '../../models/User/UserLogged';
import { BackAPIService } from '../../services/back-api.service';
import { CommonModule } from '@angular/common';
import { PropostaRESPONSE } from '../../models/Proposta/PropostaRESPONSE';
import { Proposta } from '../../models/Proposta/Proposta';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  public user!: UserLogged;
  constructor(private API: BackAPIService) {
    this.user = this.API.authStatus.getUser();
  }

  onYesClick(PropostaRESPONSE: PropostaRESPONSE) {
    console.log('Yes');
    const proposta = {
      id: PropostaRESPONSE.id,
      idLocador: PropostaRESPONSE.room.dono.matricula,
      idLocatario: PropostaRESPONSE.locatario.matricula,
      idQuarto: PropostaRESPONSE.room.id,
      state: 'Aceito',
    } as Proposta;
    console.log(proposta);

    this.API.PUTPropose(proposta);
  }

  onNoClick(PropostaRESPONSE: PropostaRESPONSE) {
    console.log(PropostaRESPONSE);

    this.API.DELETEPropose(PropostaRESPONSE.id);
  }
}
