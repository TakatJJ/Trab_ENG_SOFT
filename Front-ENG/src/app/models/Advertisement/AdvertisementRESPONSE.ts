import { UserOwner } from '../User/UserOwner';
import { UserLogged } from '../User/UserLogged';

export class AdvertisementRESPONSE {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  localizacao: string;
  numeroQuartos: number;
  dono: UserOwner;
  campusProximo: string;
  foto: string;
  constructor(
    id: number,
    titulo: string,
    descricao: string,
    preco: number,
    localizacao: string,
    numeroQuartos: number,
    dono: UserOwner,
    campusProximo: string,
    foto: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.preco = preco;
    this.localizacao = localizacao;
    this.numeroQuartos = numeroQuartos;
    this.dono = dono;
    this.campusProximo = campusProximo;
    this.foto = foto;
  }
}
