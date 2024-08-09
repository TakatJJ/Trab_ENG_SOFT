import Notification from '../Notification';

export interface UserLogged {
  matricula: number;
  curso: string;
  email: string;
  genero: string;
  tipoDeUser: string;
  minhasNotificacoes: Array<Notification>;
}
