import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private myFirstObs: Subscription = new Subscription;
  private myInterval: Subscription = new Subscription;

  title = ' Welcome Shop on line -  4.0 (by LIPATIA)';

  constructor() { }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.myFirstObs.unsubscribe();
    this.myInterval.unsubscribe();
    //throw new Error('Method not implemented.');
  }

}

/*  Shift+Ctrl + L */