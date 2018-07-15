import {IngredientesClass} from "./ingredientes.class";
import {puts} from "util";

export class IngredientesService {

    arregloIngredientes: IngredientesClass[] = [new IngredientesClass(1,'papas',2,'Papas fritas', false, 'Nose', false, 1)];

    agregarIngrediente(ingrediente: IngredientesClass): IngredientesClass[] {
        this.arregloIngredientes.push(ingrediente);
        return this.arregloIngredientes;
    }

    mostrarTodos(): IngredientesClass[] {
        return this.arregloIngredientes;
    }

    mostrarUnoPorId(idABuscar: number): IngredientesClass {
        var ingredienteId: IngredientesClass = this.arregloIngredientes.find(ingrediente => ingrediente.id == idABuscar);
        return ingredienteId;
    }

    editarUnoPorId(idABuscar: number, ingrediente: IngredientesClass ): IngredientesClass [] {
        var ingredienteId: IngredientesClass = this.arregloIngredientes.find(ingrediente => ingrediente.id == idABuscar);

        if (ingredienteId !== undefined) {
            var idArreglo = this.arregloIngredientes.indexOf(ingredienteId);
            puts(this.arregloIngredientes[idArreglo] = ingrediente);
        }
        return this.arregloIngredientes;
    }
}