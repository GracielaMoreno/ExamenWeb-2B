import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-ingrediente',
  templateUrl: './cards-ingrediente.component.html',
  styleUrls: ['./cards-ingrediente.component.css']
})
export class CardsIngredienteComponent implements OnInit {

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
