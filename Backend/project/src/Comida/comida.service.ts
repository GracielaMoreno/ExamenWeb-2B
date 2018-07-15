import { Injectable} from "@nestjs/common";
import {ComidaClass} from "./comida.class";
import {identity} from "rxjs/index";
import {puts} from "util";

@Injectable()
export class ComidaService {

    arregloComidas: ComidaClass[] = [new ComidaClass(1,'Salchi', 'Papas y salchica', 'Ecuador', 2,true)];

    agregarComida(comida: ComidaClass): ComidaClass[] {
        this.arregloComidas.push(comida);
        return this.arregloComidas;
    }

    mostrarTodos(): ComidaClass[] {
        return this.arregloComidas;
    }

    mostrarUnoPorId(idABuscar: number): ComidaClass {
        var comidaId: ComidaClass = this.arregloComidas.find(comida => comida.id == idABuscar);
        return comidaId;
    }

    editarUnoPorId(idABuscar: number, comida: ComidaClass ): ComidaClass [] {
        var comidaId: ComidaClass = this.arregloComidas.find(comida => comida.id == idABuscar);
        if (comidaId !== undefined) {
            var idArreglo = this.arregloComidas.indexOf(comidaId);
            puts(this.arregloComidas[idArreglo] = comida);
        }
        return this.arregloComidas;
    }
}
