import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UsuarioService} from "./usuario.service";

@Injectable()
export class IngredienteService {

  constructor(private http: HttpClient) {
  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getIngredientes() {
    let header = IngredienteService.getCommonHeaders();
    return this.http.get("http://localhost:1337/ingrediente",{headers: header});
  }
  getIngredienteBusqueda(parametroBusqueda) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/ingrediente/" + parametroBusqueda ,{headers: header});
  }
  getIngredientePorComida(idComida) {
    let header = UsuarioService.getCommonHeaders();
    return this.http.get("http://localhost:1337/ingrediente/porComida/" + idComida ,{headers: header});
  }
  getIngredientesPorId(Id) {
    let header = IngredienteService.getCommonHeaders();
    return this.http.get("http://localhost:1337/ingrediente/" + Id ,{headers: header});
  }
}
