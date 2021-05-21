import { Component, OnInit } from '@angular/core';
import { alumnos } from './alumnos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  name = 'Angular';
  students: any[] = [];
  flag = true;

  ngOnInit(): void {
    this.students = alumnos;

    this.students.map(stude => {
      stude['class'] = this.getClass(stude.point);
    });

    console.log(this.students);    

  }

  private getClass(calification: number) {
    if (calification <= 2) return 'very_poor';
    else if (calification > 2 && calification <=4) return 'poor';
    else if (calification > 4 && calification <= 6) return 'good';
    else if (calification > 6 && calification <= 8) return ' excellent';
    return 'invlid';
  }

  changeTheme() {
    this.flag = !this.flag;
  }

}
