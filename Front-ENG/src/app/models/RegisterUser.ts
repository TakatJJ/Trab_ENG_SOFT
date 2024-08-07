import { FormGroup } from '@angular/forms';
export class RegisterUser {
  private matricula: number;
  private senha: string;
  private curso: string;
  private email: string;
  private genero: string;
  private tipoDeUser: string;
  constructor(FormGroup: FormGroup) {
    this.matricula = FormGroup.value.matricula;
    this.senha = FormGroup.value.senha;
    this.curso = FormGroup.value.curso;
    this.email = FormGroup.value.email;
    this.genero = FormGroup.value.genero;
    this.tipoDeUser = FormGroup.value.tipoDeUser;
  }
  getID() {
    return this.matricula;
  }
}
