import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['../../app.component.css']
})
export class HeroeComponent implements OnInit {

  nombre: string = 'Iroman';
  edad: number = 25;

  constructor() { }

  ngOnInit(): void {
  }

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`
  }

  cambiarNombre() {
    this.nombre = 'Spiderman';
  }

  cambiarEdad() {
    this.edad = 50;
  }

}
