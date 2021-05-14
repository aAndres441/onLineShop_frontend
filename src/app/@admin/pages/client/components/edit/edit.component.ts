import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title='Edit ';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enter(){
    confirm('Hello Edit');
    /* this.router.navigate(['/tarjeta']); */
  }

}