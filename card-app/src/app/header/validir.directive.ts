import { Directive, Input, Output } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
@Directive({
  selector: '[appValidir]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidirDirective, multi: true }]

})
export class ValidirDirective implements Validator {
  @Input('appValidir') errorMsg: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const regex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    console.log(control.value);
    if (regex.test(control.value)) {
      return { appValidir: true }
    } else {
      return null;
    }

  }




}
