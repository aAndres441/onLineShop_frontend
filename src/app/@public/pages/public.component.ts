import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  title = 'Online Shop';
  date:Date;
  hour:number;
  min:number;

  
  constructor() { }

  ngOnInit(): void {
    this.date =  new Date();
    this.hour = new Date().getHours();
    this.min = new Date().getMinutes();
    
  }

}
