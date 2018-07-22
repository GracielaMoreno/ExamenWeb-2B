import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  @Input() nombreUsuario;
  @Input() imgUsuario;
  @Input() idusuario;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  irAHome() {
    const url = ['/home', this.idusuario];
    this._router.navigate(url);
  }
  irAPerfil() {
    const url = ['/perfil', this.idusuario];
    this._router.navigate(url);
  }
}
