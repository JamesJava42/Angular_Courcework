import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servertemplate',
  templateUrl: './servertemplate.component.html',
  styleUrls: ['./servertemplate.component.css']
})
export class ServertemplateComponent implements OnInit {
  @Input()
   element: any;
  constructor(){}
  // element: {name: string, content:string};
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }



}
