import { Component, ElementRef, EventEmitter, OnInit, Output ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent  implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // serverName:string='';
  // blueprintName:string='';
  // insted we use the @viewChild() to set 
  
  @Output() serverAdd= new EventEmitter<{name:string, content:string}>();
  @Output() blueprintAdd= new EventEmitter<{name:string , content:string}>();
 @ViewChild('serverName') serverName : ElementRef;
 @ViewChild('blueName') blueName : ElementRef;

  addServer(input){
    // this.serverAdd.emit({ name:this.serverName, content: this.blueprintName});
    console.log(input.value);
    this.serverAdd.emit({ name: input.value, content: this.blueName.nativeElement.value});

  }
  addBlueprint(){
    // this.blueprintAdd.emit({ name:this.serverName, content: this.blueprintName});
    this.blueprintAdd.emit({ name:this.serverName.nativeElement, content: this.blueName.nativeElement});

  }


  

}
