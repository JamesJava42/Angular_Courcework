import { Component, OnInit } from '@angular/core';
import { Account } from './services-task/Account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  title = 'card-app';

  serverElements=[{name: 'servername' , content: 'server content'}];

  onAddServer(serverData: {name: string , content:string}){
    this.serverElements.push(
       {
        name: serverData.name,
        content: serverData.content
       }
    );

  }
  accounts: Account[]=[
    new Account("Rakesh","leave"),
    new Account("Ravi","active")
  ];

  addedAccountApp(event:any){
    console.log(event.status);
    this.accounts.push(new Account(event.name,event.status));

  }
  updateAccount(account:any){
    this.accounts[account.id].status=account.status;
    console.log('status changed as '+this.accounts[account.id].status+'as'+account.status);
  }
  
  onAddBlueprint(serverData: { name: string , content: string }){
    this.serverElements.push(
       {
        name: serverData.name,
        content: serverData.content
       }
    );

  }
}
