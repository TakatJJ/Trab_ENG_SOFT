import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function isValidMatricula(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const matricula = control.value;
    if (matricula) {
      if (RegExp('^[0-9]{6}$').test(matricula)) {
        return null;
      } else {
        return { isValidMatricula: true };
      }
    }
    return null;
  };
}
