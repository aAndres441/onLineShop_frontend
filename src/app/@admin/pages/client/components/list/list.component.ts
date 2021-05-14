import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title='List ';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enter(){
    confirm('Hello Edit');
    /* this.router.navigate(['/tarjeta']); */
  }

}