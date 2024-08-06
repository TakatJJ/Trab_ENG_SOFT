import { RegisterUser } from './RegisterUser';

export class AdvertisementRESPONSE {
  id: number;
  titulo: string;
  descricao: string;
  preco: number;
  localizacao: string;
  numeroQuartos: number;
  user: RegisterUser;
  // fotos: Array<File>;
  constructor(
    id: number,
    titulo: string,
    descricao: string,
    preco: number,
    localizacao: string,
    numeroQuartos: number,
    user: RegisterUser
    // fotos: Array<File>
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.preco = preco;
    this.localizacao = localizacao;
    this.numeroQuartos = numeroQuartos;
    this.user = user;
    // this.fotos = fotos;
  }
}
