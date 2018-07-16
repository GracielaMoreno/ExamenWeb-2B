import {Component, Input, OnInit} from '@angular/core';
import {ComidaService} from "../../Servicios/comida.service";

@Component({
  selector: 'app-cards-comida',
  templateUrl: './cards-comida.component.html',
  styleUrls: ['./cards-comida.component.css']
})
export class CardsComidaComponent implements OnInit {

  listaComidas = [];
  numeroItems = 2;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _comidaService: ComidaService) { }

  ngOnInit() {
    this._comidaService.getComidas().subscribe(
      (result: any[]) => {
        this.listaComidas = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaComidas.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaComidas.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
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
