import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  editable:boolean= false;
  professionalFormEditable:boolean= false;
  presentaddressEditable:boolean=  false;
  addressFormEditable:boolean=  false;
  changepassEdit:boolean=  false;

  saveProfile(form?: any){
    if(form === 4){
      
    }
  }
  setFormEditable(form?: any) {
    if (form === 1) {
      this.editable = !this.editable;
    }
    if (form === 2) {
      this.professionalFormEditable = !this.professionalFormEditable;
    }
    if (form === 3) {
      this.presentaddressEditable = !this.presentaddressEditable;
    }
    if (form === 4) {
      this.addressFormEditable = !this.addressFormEditable;
    }
    if (form === 5) {
      this.changepassEdit = !this.changepassEdit;
      // this.changePassOfUser();
    }
    if (!form) {
      this.editable = !this.editable;
      this.professionalFormEditable = !this.professionalFormEditable;
      this.presentaddressEditable = !this.presentaddressEditable;
      this.addressFormEditable = !this.addressFormEditable;
    }
  }
 
}
