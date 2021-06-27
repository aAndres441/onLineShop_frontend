import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() changeToogle = new EventEmitter<boolean>();
  toogleValor = false;

  

toogled(){
  if (this.toogleValor === undefined){
    this.toogleValor = false;
  }
  this.toogleValor = !this.toogleValor;
  console.log(this.toogleValor);
  let button = document.getElementById('btn-menu-toggle')
  console.log('BOTON', button);
  
  this.changeToogle.emit(this.toogleValor);
}

 /* no los usare
  constructor() {}
  ngOnInit(): void {} */

}
