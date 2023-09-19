import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void { }

  operacion: string = ''; // operacion que estamos haciendo
  resultado: string = ''; // su resultado
  resultado_anterior: string = ''; // el resultado de la operacion anterior
  operacion_completa: boolean = false; // Flag para esperar a que el usuario pulse un boton para sobreescribir la operacion anterior

  pulsarBoton(boton: string) {
    if (this.operacion_completa) {
      this.borrarTodo();
      this.operacion_completa = false;
    }

    this.operacion += boton;
  }

  pulsarIgual() {
    this.resultado = eval(this.operacion); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval

    this.resultado_anterior = this.resultado;
    this.operacion_completa = true;
  }

  borrar() {
    if (this.operacion_completa) {
      this.resultado = '';
      this.resultado_anterior = '';
      this.operacion_completa = false;
    }

    this.operacion = this.operacion.slice(0, -1);
  }

  borrarTodo() {
    this.operacion = '';
    this.resultado = '';
    this.resultado_anterior = '';
    this.operacion_completa = false;
  }

}
