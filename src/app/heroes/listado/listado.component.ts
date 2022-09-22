import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListadoComponent implements OnInit {
  
  heroes: string[] = ['Iroman', 'Spiderman', 'Hulk'];
  heroeBorrado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroes() {
    this.heroeBorrado = this.heroes.shift() || ''
  }

}
