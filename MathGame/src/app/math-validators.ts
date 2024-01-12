import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const answer = form.value[target];
      const a = form.value[sourceOne];
      const b = form.value[sourceTwo];

      if (a + b === parseInt(answer)) {
        return null;
      } else {
        return { addition: true };
      }
    };
  }
}
