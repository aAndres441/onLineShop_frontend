import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() unTitulo:string;
  
  constructor() {
    this.unTitulo='';
   }

  ngOnInit(): void {
  }

  doSomethingOnWindowScroll($event:Event){
    /* ngAfterViewInit() { //Recién en este punto tendrás acceso al valor */
   /*  let scrollOffset = $event.timeStamp;
    console.log("window scroll: ", scrollOffset);
    console.log("scrollTop: ", document.body.className);
    console.log('children ', document.body.getElementsByClassName("logo")); */
    
   /*  if(document.documentElement.scrollTop >400){
      console.log('pppp');
      
    }else{
     
     console.log('ssssss');
      
    }*/
    
  }

}
