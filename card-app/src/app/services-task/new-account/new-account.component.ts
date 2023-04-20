import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent  implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  @Output() accountStatus = new EventEmitter< {name:string, status:string }>();
  addAccount(name:string, type:string){
    this.accountStatus.emit(
      {
        name:name,
        status: type

      }
      
    )
    console.log("A new Status hsas changed , status :"+type);

  }

}
