import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }
}
