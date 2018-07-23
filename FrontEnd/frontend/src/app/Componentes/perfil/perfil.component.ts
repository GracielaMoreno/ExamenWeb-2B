import { Component, OnInit } from '@angular/core';
import {TransferenciaService} from "../../Servicios/transferencia.service";
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../Interfaces/usuario";
import {UsuarioService} from "../../Servicios/usuario.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [TransferenciaService, UsuarioService]
})
export class PerfilComponent implements OnInit {

  listaPeticiones = [];
  listaPetBoton = [];
  usuarioActual: Usuario;

  constructor(private _transferenciaService: TransferenciaService,
              private _usuarioService: UsuarioService,
              private _activatedRoute: ActivatedRoute)
  {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.obtenerPeticionesRealizadas(params['idUsuarioActual']);
        this.obtenerPeticionesRecibidas(params['idUsuarioActual']);
      });
  }
  ngOnInit() {
  }

  obtenerPeticionesRealizadas (idUsuario){
    this._transferenciaService.getPeticionesRealizadas(idUsuario).subscribe(
      (result: any[]) => {
        this.listaPeticiones =  result;
      }
    );
  }
  obtenerPeticionesRecibidas (idUsuario){
    this._transferenciaService.getPeticionesRecibidas(idUsuario).subscribe(
      (result: any[]) => {
        this.listaPetBoton =  result;
      }
    );
  }
  getUsuarioActualPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }
}
