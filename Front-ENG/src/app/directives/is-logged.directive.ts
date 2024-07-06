import { Directive } from '@angular/core';

@Directive({
  selector: '[appIsLogged]',
  standalone: true
})
export class IsLoggedDirective {

  constructor() { }

}
