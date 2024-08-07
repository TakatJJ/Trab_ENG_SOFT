export class userLoginResponse {
  public matricula: number;
  public curso: string;
  public email: string;
  public genero: string;
  public tipoDeUser: string;
  constructor(
    matricula: number,
    curso: string,
    email: string,
    genero: string,
    tipoDeUser: string
  ) {
    this.matricula = matricula;
    this.curso = curso;
    this.email = email;
    this.genero = genero;
    this.tipoDeUser = tipoDeUser;
  }
}
