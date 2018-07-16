import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {PageEvent} from "@angular/material";
import {UsuarioService} from "../../Servicios/usuario.service";

@Component({
  selector: 'app-cards-usuario',
  templateUrl: './cards-usuario.component.html',
  styleUrls: ['./cards-usuario.component.css']
})
export class CardsUsuarioComponent implements OnInit {

  listaUsuarios = [];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this._usuarioService.getUsuarios().subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        console.log(this.listaUsuarios);
        this.obtenerCantidadPaginas();
        this.obtenerListaAMostrar();
      }
    );
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
