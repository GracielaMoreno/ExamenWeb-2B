import {Component, Input, OnInit} from '@angular/core';
import {ComidaService} from "../../Servicios/comida.service";
import {IngredienteService} from "../../Servicios/ingrediente.service";
import {UsuarioService} from "../../Servicios/usuario.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ComidaService, IngredienteService, UsuarioService]
})
export class HomeComponent implements OnInit {

  datoABuscar;
  listaUsuarios = [];
  numeroItemsU = 4;
  cantidadPaginasU;
  listaAMostrarUsuarios;
  paginaActualU: number = 1;

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    /*this._usuarioService.getUsuarios().subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        console.log(this.listaUsuarios);
        this.obtenerCantidadPaginas();
        this.obtenerListaAMostrar();
      }
    );*/
  }

  cargarDatosbusqueda() {
    this._usuarioService.getUsuariosBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        console.log(this.listaUsuarios);
        this.obtenerCantidadPaginas();
        this.obtenerListaAMostrar();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginasU = this.listaUsuarios.length/this.numeroItemsU;
    if (!Number.isInteger(this.cantidadPaginasU)) {
      this.cantidadPaginasU = Number.parseInt(this.cantidadPaginasU + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrarUsuarios = this.listaUsuarios.slice(this.paginaActualU*this.numeroItemsU - this.numeroItemsU, this.paginaActualU*this.numeroItemsU)
  }

  next() {
    this.paginaActualU += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActualU -= 1;
    this.obtenerListaAMostrar()
  }
}
