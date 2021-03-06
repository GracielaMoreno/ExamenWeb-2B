import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/usuario";
import {Ingrediente} from "../../Interfaces/ingrediente";
import {ActivatedRoute} from "@angular/router";
import {IngredienteService} from "../../Servicios/ingrediente.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {ComidaService} from "../../Servicios/comida.service";
import {Comida} from "../../Interfaces/comida";
import {TransferenciaService} from "../../Servicios/transferencia.service";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css'],
  providers: [IngredienteService, UsuarioService, ComidaService, TransferenciaService]
})
export class SeleccionTransferenciaComponent implements OnInit {

  listaIngredientes = [];
  comidas: Comida;
  itemTransferencia: Ingrediente;
  usuarioActual: Usuario;
  usuarioDuenoItem: Usuario;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ingredienteService: IngredienteService,
    private _usuarioService: UsuarioService,
    private _comidaService: ComidaService,
    private _transferenciaService: TransferenciaService
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getIngredientepoId(params['idIngrediente']);
        this.getUsuarioPorIngredienteId(params['idIngrediente']);
        this.getComidadeUsuario(params['idUsuarioActual'])
      });
  }

  ngOnInit() {
  }

  getUsuarioActualPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }
  getIngredientepoId(idIngrediente) {
    this._ingredienteService.getIngredientePorId(idIngrediente).subscribe(
      (result: any) => {
        this.itemTransferencia =  result[0];
        console.log(this.itemTransferencia);
      }
    )
  }
  getComidadeUsuario(idUsuario) {
    this._comidaService.getComidasporUsuario(idUsuario).subscribe(
      (result: any) => {
        this.comidas = result[0];
        this.getIngredientesdeComida(this.comidas.id);
      }
    )
  }
  getIngredientesdeComida(idComida) {
    this._ingredienteService.getIngredientePorComida(idComida).subscribe(
      (result: any[]) => {
        this.listaIngredientes = result;
      }
    )
  }
  getUsuarioPorIngredienteId(idIngrediente) {
    this._ingredienteService.getIngredienteComidaYUsuario(idIngrediente).subscribe(
      (result: any) => {
        this.usuarioDuenoItem = result[0].comidaId.usuarioId;
      }
    )
  }

  guardarPeticionDeTransferencia(idIngrediente) {
    this._transferenciaService.crearTransferencia(this.usuarioActual.id, this.usuarioDuenoItem.id, this.itemTransferencia.id, idIngrediente).subscribe();
  }
}
