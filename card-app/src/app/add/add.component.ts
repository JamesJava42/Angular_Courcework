import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Address } from '../models/Address.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{

addressObject: Address;

@Input() isSubmited: any;

@Output() addressEmit = new EventEmitter<any>();

@Input()  set address(addressInput: Address) {
    if (addressInput) {
      this.addressObject = addressInput;
      // if (this.addressObject.country) {
      //   this.selectedCountry = this.countries.filter((country: any) => {
      //     if (country.country === this.addressObject.country) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   })[0];
      // }
      // if (this.addressObject.state) {
      //   this.selectedState = this.selectedCountry.states.filter((state: any) => {
      //     if (state.state === this.addressObject.state) {
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   })[0];
      // }
    }
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


}
