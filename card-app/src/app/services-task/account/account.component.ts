import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Account } from '../Account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  @Input() account:any;
  @Input() id

  @Output() response= new EventEmitter< {id:number, status:string}>();


  onAccountChange(){
    this.response.emit(
      {
        id:this.id,
        status:this.account.status
      }
    )
  }



}
