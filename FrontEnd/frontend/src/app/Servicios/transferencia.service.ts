import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IngredienteService} from "./ingrediente.service";

@Injectable()
export class TransferenciaService {

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

  getPeticionesRealizadas(idUsuasio) {
    let header = TransferenciaService.getCommonHeaders();
    return this.http.get("http://localhost:1337/transferencia/peticionesRealizadas/" + idUsuasio ,{headers: header});
  }

  getPeticionesRecibidas(idUsuasio) {
    let header = TransferenciaService.getCommonHeaders();
    return this.http.get("http://localhost:1337/transferencia/peticionesRecibidas/" + idUsuasio ,{headers: header});
  }

  crearTransferencia(usuarioPideId, usuarioOfreceId, ingredientePedidoId, ingredienteOfertadoId) {
    let header = TransferenciaService.getCommonHeaders();
    //console.log("http://localhost:1337/transferencia/agregar" + usuarioPideId + "/" + usuarioOfreceId + "/" + ingredientePedidoId + "/" + ingredienteOfertadoId);

    return this.http.post("http://localhost:1337/transferencia/agregar",
      {usuarioPide:usuarioPideId,
      usuarioOfrece:usuarioOfreceId,
      ingredientePedido:ingredientePedidoId,
      ingredienteOfertado:ingredienteOfertadoId},{headers: header});
  }
}
