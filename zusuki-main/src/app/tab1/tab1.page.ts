import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  animales: any[]=[
    {id:0,nombre:'', url:'../../assets/animals/0.jpeg'},
    {id:1,nombre:'', url:'../../assets/animals/1.jpeg'},
    {id:2,nombre:'', url:'../../assets/animals/2.jpeg'},
    {id:3,nombre:'', url:'../../assets/animals/3.jpeg'},
    {id:4,nombre:'', url:'../../assets/animals/4.jpeg'},
    {id:5,nombre:'', url:'../../assets/animals/5.jpeg'},

  ]
}
