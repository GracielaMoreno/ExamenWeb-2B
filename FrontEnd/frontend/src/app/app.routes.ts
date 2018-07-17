import {Routes} from "@angular/router";
import {HomeComponent} from "./Componentes/home/home.component";
import {LoginComponent} from "./Componentes/login/login.component";
import {PeticionTransferenciaComponent} from "./Componentes/peticion-transferencia/peticion-transferencia.component";
import {SeleccionTransferenciaComponent} from "./Componentes/seleccion-transferencia/seleccion-transferencia.component";
import {PerfilComponent} from "./Componentes/perfil/perfil.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent},
  {
    path: 'login',
    component: LoginComponent},
  {
    path: 'petTransf/:idUsuario',
    component: PeticionTransferenciaComponent},
  {
    path: 'selecTransf',
    component: SeleccionTransferenciaComponent},
  {
    path: 'perfil',
    component: PerfilComponent}
  /*{
    path: 'modeloPaciente/:idPaciente/modeloMedicamento/:idMedicamento',
    component: ModeloMedicamentoComponent },
  {
    path: 'modeloPaciente/:idPaciente',
    component: ModeloPacienteComponent,
    children: [{
      path: 'modeloMedicamento/:idMedicamento',
      component: ModeloMedicamentoComponent
    }]
  }*/
];
