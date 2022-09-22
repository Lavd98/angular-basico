import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador app';
  numero: number = 12;
  base: number = 5;

  acumular( valor: number ) {
    this.numero += valor
  }

}
