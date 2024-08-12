import Proposta from '../Proposta/PropostaRESPONSE';

export interface UserLogged {
  matricula: number;
  curso: string;
  email: string;
  genero: string;
  tipoDeUser: string;
  propostas: Array<Proposta>;
}
