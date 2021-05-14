import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title='Admin';
  
  constructor() { }

  ngOnInit(): void {
  }

}
