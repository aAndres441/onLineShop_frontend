import { Component, OnInit } from '@angular/core';
import { alumnos } from '../contact/alumnos';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

   /*  const navMen = document.querySelector(".nav-menu");
    const navToggl = document.querySelector(".btn-nav");
    navToggl.addEventListener("click", () => {
      navMen.classList.toggle("nav-menu_visible");
    })

    console.log(navMen.className);
    console.log(navToggl.className); */
    
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

  toggle() {
    /* this.flag = !this.flag; */
    const navMen = document.querySelector(".nav-menu");
    const navToggl = document.querySelector(".btn-nav");
    navToggl.addEventListener("click", () => {
      navMen.classList.toggle("nav-menu_visible");
    })
    /* console.log("3",navMen.className);
    console.log("4",navToggl.className); */
  }

}
