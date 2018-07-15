import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './Componentes/home/home.component';
import { CardsUsuarioComponent } from './Componentes/cards-usuario/cards-usuario.component';
import { CardsComidaComponent } from './Componentes/cards-comida/cards-comida.component';
import { CardsIngredienteComponent } from './Componentes/cards-ingrediente/cards-ingrediente.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BarraSuperiorComponent } from './Componentes/barra-superior/barra-superior.component';
import {MatIconModule} from '@angular/material/icon';
import { PeticionTransferenciaComponent } from './Componentes/peticion-transferencia/peticion-transferencia.component';
import { SeleccionTransferenciaComponent } from './Componentes/seleccion-transferencia/seleccion-transferencia.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CardsUsuarioComponent,
    CardsComidaComponent,
    CardsIngredienteComponent,
    BarraSuperiorComponent,
    PeticionTransferenciaComponent,
    SeleccionTransferenciaComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
