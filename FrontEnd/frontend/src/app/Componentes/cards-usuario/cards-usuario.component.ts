import {Component, EventEmitter, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-cards-usuario',
  templateUrl: './cards-usuario.component.html',
  styleUrls: ['./cards-usuario.component.css']
})
export class CardsUsuarioComponent implements OnInit {

  listaUsuarios = [1,2,3,4,5,6,7,8,9,10];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor() { }
  ngOnInit() {
    this.obtenerListaAMostrar();
    this.obtenerCantidadPaginas();
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaUsuarios.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaUsuarios.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
  }

  next() {
    this.paginaActual += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActual -= 1;
    this.obtenerListaAMostrar()
  }

}
