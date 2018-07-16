import {Component, Input, OnInit} from '@angular/core';
import {IngredienteService} from "../../Servicios/ingrediente.service";

@Component({
  selector: 'app-cards-ingrediente',
  templateUrl: './cards-ingrediente.component.html',
  styleUrls: ['./cards-ingrediente.component.css']
})
export class CardsIngredienteComponent implements OnInit {

  listaIngredientes = [];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _ingredienteService: IngredienteService) { }

  ngOnInit() {
    this._ingredienteService.getIngredientes().subscribe(
      (result: any[]) => {
        this.listaIngredientes = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaIngredientes.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaIngredientes.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
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
