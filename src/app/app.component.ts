import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = "Holi";

  campo1 = 0; /* Este es el número de arriba, el que estás escribiendo */
  campo2 = 0; /* muestra el número que estás escribiendo pero en la operación */
  operacion= " "; /* únicamente es el símbolo de la operación */
  resultado = 0;
  campoF1: any  = ""; /* El dato anterior */
  decimales= 0;   // De parte de Pedroma: eres un terrorista
  ultimoN=0; /* esto todavía está en desarrollo */
  
  uno(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0
    }

    if(this.decimales ==0){
      this.campo1 = this.campo1 * 10 + 1;}
      else if(this.decimales !=0){
        this.campo1 = 1 * this.decimales + this.campo1;
        this.decimales=this.decimales * 0.1;
      }


    
    this.campo2 = this.campo1;
    this.ultimoN=1;
  }
  dos(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10 + 2;}
        else if(this.decimales !=0){
          this.campo1 = 2 * this.decimales + this.campo1;
          this.decimales=this.decimales * 0.1;
        }

    this.campo2 = this.campo1;
    this.ultimoN=2;
  }
  tres(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10 + 3;}
        else if(this.decimales !=0){
          this.campo1 = 3 * this.decimales + this.campo1;
          this.decimales=this.decimales * 0.1;
        }
    this.campo2 = this.campo1;
    this.ultimoN=3;
  }
  cuatro(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10 + 4;}
        else if(this.decimales !=0){
          this.campo1 = 4 * this.decimales + this.campo1;
          this.decimales=this.decimales * 0.1;
        }
    this.campo2 = this.campo1;
    this.ultimoN=4;
  }
  cinco(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10 + 5;}
        else if(this.decimales !=0){
          this.campo1 = 5 * this.decimales + this.campo1;
          this.decimales=this.decimales * 0.1;
        }
    this.campo2 = this.campo1;
    this.ultimoN=5;
  }
  seis(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10 + 6;}
        else if(this.decimales !=0){
          this.campo1 = 6 * this.decimales + this.campo1;
          this.decimales=this.decimales * 0.1;
        }
    this.campo2 = this.campo1;
    this.ultimoN=6;
  }
  siete(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10 + 7;}
        else if(this.decimales !=0){
          this.campo1 = 7 * this.decimales + this.campo1;
          this.decimales=this.decimales * 0.1;
        }
    this.campo2 = this.campo1;
    this.ultimoN=7;
  }
  ocho(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10 + 8;}
        else if(this.decimales !=0){
          this.campo1 = 8 * this.decimales + this.campo1;
          this.decimales=this.decimales * 0.1;
        }
    this.campo2 = this.campo1;
    this.ultimoN=8;
  }
  nueve(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10 + 9;}
        else if(this.decimales !=0){
          this.campo1 = 9 * this.decimales + this.campo1;
          this.decimales=this.decimales * 0.1;
        }
    this.campo2 = this.campo1;
    this.ultimoN=9;
  }
  cero(){

    if(this.resultado !=0){ 
      this.campo1=0;
      this.campo2=0;
      this.campoF1="";
      this.operacion="";
      this.resultado=0}

      if(this.decimales ==0){
        this.campo1 = this.campo1 * 10;}
        else if(this.decimales !=0){
          this.decimales=this.decimales * 0.1;
        }
    this.campo2 = this.campo1;
    this.ultimoN=0;
  }

  borrar(){
    this.campo1=0;
    this.campo2=0;
    this.campoF1="";
    this.operacion="";
    this.resultado=0;
    this.decimales=0;
  }

  borrartodo(){
    this.campo1=0;
    this.campo2=0;
    this.campoF1="";
    this.operacion="";
    this.resultado=0;
    this.decimales=0;
  }
  multiplicacion(){
    this.operacion=" x ";
    this.campoF1 = this.campo1;
    this.campo1 = 0;
    this.campo2 = 0;
    this.decimales=0;
  }
  division(){
    this.operacion=" / ";
    this.campoF1 = this.campo1;
    this.campo1 = 0;
    this.campo2 = 0;
    this.decimales=0;
  }
  suma(){
    this.operacion=" + ";
    this.campoF1 = this.campo1;
    this.campo1 = 0;
    this.campo2 = 0;
    this.decimales=0;
  }
  resta(){
    this.operacion=" - ";
    this.campoF1 = this.campo1;
    this.campo1 = 0;
    this.campo2 = 0;
    this.decimales=0;
  }
  igual(){
    this.campo1=this.campo2;
    if(this.operacion==" x "){ 
    this.resultado = this.campoF1 * this.campo1;}
    else  if(this.operacion==" - "){ 
      this.resultado = this.campoF1 - this.campo1;} 
      else  if(this.operacion==" / "){ 
        this.resultado = this.campoF1 / this.campo1;} 
        else  if(this.operacion==" + "){ 
          this.resultado = this.campoF1 + this.campo1;} 
    
    this.campo1=0;
  }

  coma(){
    this.decimales=0.1
  }

}
