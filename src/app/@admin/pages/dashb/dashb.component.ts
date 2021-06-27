import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashb',
  templateUrl: './dashb.component.html',
  styleUrls: ['./dashb.component.css']
})
export class DashbComponent implements OnInit {

  //elements: any[] = [];

  constructor() { }

  ngOnInit(): void { }

  ejecutar(e: Event) {

    console.log('e', e);

    const button = document.getElementById('btn');
    const elements = document.querySelectorAll('.element');

    //console.log('Boton-', button, 'ele', elements[0].className);

    let newArray2 = Array.from(elements);
    newArray2.map((index) => {
      index.classList.toggle('newClass');
    })


    /* button.addEventListener('click', () => {
      for (let index = 0; index < elements.length; index++) {
        elements[index].classList.toggle('newClass');
        console.log('Un elemento 0', elements[index].className);
      }
    }); */

    /*  button.addEventListener('click', () => {
       let newarray = Array.from(elements);
       //console.log('newarray ', newarray);
       newarray.map((index) => {
         index.classList.toggle('newClass');
         })
       }
     ); */

  }

}
