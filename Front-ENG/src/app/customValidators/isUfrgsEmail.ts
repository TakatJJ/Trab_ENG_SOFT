import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
export function isUfrgsEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    if (email) {
      if (email.includes('@ufrgs.br')) {
        return null;
      } else {
        return { isUfrgsEmail: true };
      }
    }
    return null;
  };
}
