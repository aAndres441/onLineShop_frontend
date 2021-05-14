import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  title='Details ';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enter(){
    confirm('Hello Details');
    /* this.router.navigate(['/tarjeta']); */
  }

}
