import {Component, Input, OnInit} from '@angular/core';
import {ComidaService} from "../../Servicios/comida.service";
import {IngredienteService} from "../../Servicios/ingrediente.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../Interfaces/usuario";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ComidaService, IngredienteService, UsuarioService]
})
export class HomeComponent implements OnInit {

  datoABuscar;
  usuarioActual: Usuario;

  //Usuario
  listaUsuarios = [];
  usuario_numeroItems = 4;
  usuario_cantidadPaginas;
  usuario_listaAMostrar;
  usuario_paginaActual: number = 1;

  //Comida
  listaComidas = [];
  comida_numeroItems = 2;
  comida_cantidadPaginas;
  comida_listaAMostrar;
  comida_paginaActual: number = 1;

  //Ingrediente
  listaIngredientes = [];
  ingrediente_numeroItems = 4;
  ingrediente_cantidadPaginas;
  ingrediente_listaAMostrar;
  ingrediente_paginaActual: number = 1;

  constructor(private _usuarioService: UsuarioService,
              private _comidaServcie: ComidaService,
              private _ingredienteService: IngredienteService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioPorId(params['idUsuarioActual']);
      });
  }

  ngOnInit() {
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }

  cargarDatosbusqueda() {

    //Usuarios
    this._usuarioService.getUsuariosBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaUsuarios = result;
        this.usuario_cantidadPaginas = this.obtenerCantidadPaginas(this.listaUsuarios,this.usuario_numeroItems);
        this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems);
      }
    );
    //Comida
    this._comidaServcie.getComidaBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaComidas = result;
        this.comida_cantidadPaginas =  this.obtenerCantidadPaginas(this.listaComidas, this.comida_numeroItems);
        this.comida_listaAMostrar = this.obtenerListaAMostrar(this.listaComidas, this.comida_paginaActual, this.comida_numeroItems);
    }
    );
    //Ingrediente
    this._ingredienteService.getIngredienteBusqueda(this.datoABuscar).subscribe(
      (result: any []) => {
        this.listaIngredientes = result;
        this.ingrediente_cantidadPaginas = this.obtenerCantidadPaginas(this.listaIngredientes, this.ingrediente_numeroItems);
        this.ingrediente_listaAMostrar = this.obtenerListaAMostrar(this.listaIngredientes, this.ingrediente_paginaActual, this.ingrediente_numeroItems);
      }
    );
  }

  obtenerCantidadPaginas(lista: any [], numeroItems): number {

    let cantidadPaginas: number = lista.length/numeroItems;
    if (!Number.isInteger(cantidadPaginas)) {
      cantidadPaginas = cantidadPaginas + 1;
      cantidadPaginas = Number.parseInt(cantidadPaginas.toString());
    }
    return cantidadPaginas;
  }

  obtenerListaAMostrar(listaUsuarios: any [], paginaActual, numeroItems): any [] {
    let lista = listaUsuarios.slice(paginaActual*numeroItems - numeroItems, paginaActual*numeroItems);
    return lista;
  }

  nextUsuario() {
    this.usuario_paginaActual += 1;
    this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
  }
  prevUsuario() {
    this.usuario_paginaActual -= 1;
    this.usuario_listaAMostrar = this.obtenerListaAMostrar(this.listaUsuarios, this.usuario_paginaActual, this.usuario_numeroItems)
  }

  nextComida() {
    this.comida_paginaActual += 1;
    this.comida_listaAMostrar = this.obtenerListaAMostrar(this.listaComidas, this.comida_paginaActual, this.comida_numeroItems)
  }
  prevComida() {
    this.comida_paginaActual -= 1;
    this.comida_listaAMostrar = this.obtenerListaAMostrar(this.listaComidas, this.comida_paginaActual, this.comida_numeroItems)
  }

  nextIngrediente() {
    this.ingrediente_paginaActual += 1;
    this.ingrediente_listaAMostrar = this.obtenerListaAMostrar(this.listaIngredientes, this.ingrediente_paginaActual, this.ingrediente_numeroItems);
  }
  prevIngrediente() {
    this.ingrediente_paginaActual -= 1;
    this.ingrediente_listaAMostrar = this.obtenerListaAMostrar(this.listaIngredientes, this.ingrediente_paginaActual, this.ingrediente_numeroItems);
  }

  irAPeticionesDeTransferencia(idUsuario: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/petTransf', params['idUsuarioActual'] ,idUsuario];
        this._router.navigate(url);
      }
    );
  }

  irASeleccionTransferencia(idIngrediente: string) {
    this._activatedRoute.params.subscribe(
      params =>{
        const url = ['/selecTransf', params['idUsuarioActual'],idIngrediente];
        this._router.navigate(url);
      }
    );
  }
}
