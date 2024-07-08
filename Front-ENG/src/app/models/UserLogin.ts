import { FormGroup } from "@angular/forms";
export class UserLogin {
    private matricula: number;
    private senha: string;
    constructor (
        FormGroup : FormGroup
    )
    {
        this.matricula = FormGroup.value.matricula;
        this.senha = FormGroup.value.senha;
    }
    getID(){
        return this.matricula;
    }
}