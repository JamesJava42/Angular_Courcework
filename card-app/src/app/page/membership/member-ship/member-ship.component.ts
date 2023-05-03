import { Directive, EventEmitter, Output } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[stringvalidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SpecialcharactervalidatorDirective, multi: true }]
})
export class SpecialcharactervalidatorDirective {

  @Output() validatorvalue = new EventEmitter<boolean>();
  constructor() { }
  validate(control: AbstractControl): ValidationErrors  {      
    const regex = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (regex.test(control.value)) {
      setTimeout(() => {
        this.validatorvalue.emit(true);
      }, 10);
      return { errorMsg: true };
    } else {
      setTimeout(() => {
        this.validatorvalue.emit(false);
      }, 10);
      return { errorMsg: false };
    }
  }
 
}
