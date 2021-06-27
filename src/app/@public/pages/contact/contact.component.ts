import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  name = 'TUTORIAL';
  urlTutorial='https://www.youtube.com/watch?v=rXWNr8sEUXE';

  ngOnInit(): void {  }
}
