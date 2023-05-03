import { Component } from '@angular/core';

@Component({
  selector: 'app-tenent-sidebar',
  templateUrl: './tenent-sidebar.component.html',
  styleUrls: ['./tenent-sidebar.component.css']
})
export class TenentSidebarComponent {
  img:any="https://th.bing.com/th/id/OIP.yHxIzNVDqYqoR5LbjPpoUgHaIX?pid=ImgDet&rs=1";


  Departmentarray:any[]=[ {'id':1,'name':'rakes'}];
  isActive=false;
  deptActive=false;
}
