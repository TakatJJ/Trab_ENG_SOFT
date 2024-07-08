import { FormGroup } from '@angular/forms';
export class RegisterUser{
    private matricula: number;
    private senha: string;
    private curso: string;
    private email: string;
    private genero: string;
    constructor(
        FormGroup : FormGroup,
    )
    {
        this.matricula = FormGroup.value.matricula;
        this.senha = FormGroup.value.senha;
        this.curso = FormGroup.value.curso;
        this.email = FormGroup.value.email;
        this.genero = FormGroup.value.genero;
    }
    getID(){
        return this.matricula;
    }
}