import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ComidaService} from "../../Servicios/comida.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {IngredienteService} from "../../Servicios/ingrediente.service";
import {st} from "@angular/core/src/render3";

@Component({
  selector: 'app-peticion-transferencia',
  templateUrl: './peticion-transferencia.component.html',
  styleUrls: ['./peticion-transferencia.component.css'],
  providers: [ComidaService,UsuarioService, IngredienteService]
})
export class PeticionTransferenciaComponent implements OnInit {

  nombre = "May";
  usuario: Usuario;
  listaComida = [];
  listaIngredientes = [];

  constructor(private _activatedRoute: ActivatedRoute,
              private _comidaService: ComidaService,
              private _usuarioService: UsuarioService,
              private _ingredienteService: IngredienteService
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioPorId(params['idUsuario']);
        this.getComidaPorUsuario(params['idUsuario']);
      });
  }
  ngOnInit() {
  }
  getUsuarioPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuario =  result[0];
      }
    )
  }
  getComidaPorUsuario(idUsuario) {
    this._comidaService.getComidasporUsuario(idUsuario).subscribe(
      (result: any[]) => {
        this.listaComida = result;
        this.getIngredientePorComida(this.listaComida[0].id);
      }
    );
  }
  getIngredientePorComida(idComida) {
    this._ingredienteService.getIngredientePorComida(idComida).subscribe(
      (result: any[]) => {
        this.listaIngredientes = result;
      }
    )
  }
}

interface Usuario  {
  id: number,
  nombre: string,
  contrasena: string,
  urlImg: string
}
