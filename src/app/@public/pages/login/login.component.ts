import { Component, OnInit } from '@angular/core';
/* import { DatePipe } from '@angular/common'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentTime:number;
  date:Date;

  constructor(/* public datepipe: DatePipe */) { }

  ngOnInit(): void {

    // Obtenemos la hora actual  
    const hora = new Date().getHours();
    console.log('hora', hora);
    this.date =  new Date();
    console.log('Date',this.date);
    /* const trans = this.datepipe.transform(new Date());
    console.log('trans',trans); */
    
    
    
  }

}
