import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {

  toogleAlHijo = false; /* si pongo false se esconde menu */

  escondeToogle($event){    
    this.toogleAlHijo=$event;    
  }


  /* constructor() { }

  ngOnInit(): void {
  } */

}
