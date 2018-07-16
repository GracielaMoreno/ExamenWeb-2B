import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {IngredienteEntity} from "./ingrediente.entity";
import {Like, Repository} from "typeorm";
import {ComidaEntity} from "../Comida/comida.entity";

@Injectable()
export class IngredienteService {

    /*arregloIngredientes: IngredienteClass[] = [
        new IngredienteClass(1, 'papas', 2, 'Papas fritas', false, 'Nose', false, 1)];*/
    listaIngredientes = [
        {'id': 1, 'nombreIngrediente': 'papas', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 1},
        {'id': 2, 'nombreIngrediente': 'sal', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 2},
        {'id': 3, 'nombreIngrediente': 'aceite', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 4},
        {'id': 4, 'nombreIngrediente': 'pimienta', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 5},
        {'id': 5, 'nombreIngrediente': 'harina', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 3},
        {'id': 6, 'nombreIngrediente': 'arroz', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 8},
        {'id': 7, 'nombreIngrediente': 'avena', 'cantidad': 3.2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 7},
        {'id': 8, 'nombreIngrediente': 'leche', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 7},
        {'id': 9, 'nombreIngrediente': 'lenteja', 'cantidad': 4.5, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 6},
        {'id': 10, 'nombreIngrediente': 'maíz', 'cantidad': 8, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 8},
        {'id': 11, 'nombreIngrediente': 'frejol', 'cantidad': 7, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 8},
        {'id': 12, 'nombreIngrediente': 'azucar', 'cantidad': 8, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://image.freepik.com/foto-gratis/fondo-de-madera-con-marco-hecho-de-ingredientes_23-2147606551.jpg', 'comidaId': 3},
    ];

    constructor(@InjectRepository(IngredienteEntity)
                private readonly ingredienteRepository: Repository<IngredienteEntity>){
    }

    crearIngredientes() {
        for(var ingredientes in this.listaIngredientes) {
            const ingrediente = new IngredienteEntity();
            ingrediente.id = this.listaIngredientes[ingredientes].id;
            ingrediente.nombreIngrediente = this.listaIngredientes[ingredientes].nombreIngrediente;
            ingrediente.cantidad = this.listaIngredientes[ingredientes].cantidad;
            ingrediente.descripcionPreparacion = this.listaIngredientes[ingredientes].descripcionPreparacion;
            ingrediente.opcional =this.listaIngredientes[ingredientes].opcional;
            ingrediente.tipoIngrdiente = this.listaIngredientes[ingredientes].tipoIngrediente;
            ingrediente.necesitaRefrigeracion =  this.listaIngredientes[ingredientes].necesitaRefrigeracion;
            ingrediente.urlImg = this.listaIngredientes[ingredientes].urlImg;
            const comida = new ComidaEntity();
            comida.id = this.listaIngredientes[ingredientes].comidaId;
            ingrediente.comidaId = comida;
            this.ingredienteRepository.save(ingrediente);
        }
        return this.ingredienteRepository.find();
    }

    async traerTodos(): Promise<IngredienteEntity[]> {
        return await this.ingredienteRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.ingredienteRepository.find({ nombreIngrediente: Like("%" + parametroBusqueda + "%") });
    }

    async traerIngredientePorComida(comidaID): Promise<IngredienteEntity[]> {
        return await this.ingredienteRepository.find({where: {comidaId: comidaID}});
    }

    /*agregarIngrediente(ingrediente: IngredienteClass): IngredienteClass[] {
        this.arregloIngredientes.push(ingrediente);
        return this.arregloIngredientes;
    }

    mostrarTodos(): IngredienteClass[] {
        return this.arregloIngredientes;
    }

    mostrarUnoPorId(idABuscar: number): IngredienteClass {
        var ingredienteId: IngredienteClass = this.arregloIngredientes.find(ingrediente => ingrediente.id == idABuscar);
        return ingredienteId;
    }

    editarUnoPorId(idABuscar: number, ingrediente: IngredienteClass ): IngredienteClass [] {
        var ingredienteId: IngredienteClass = this.arregloIngredientes.find(ingrediente => ingrediente.id == idABuscar);

        if (ingredienteId !== undefined) {
            var idArreglo = this.arregloIngredientes.indexOf(ingredienteId);
            puts(this.arregloIngredientes[idArreglo] = ingrediente);
        }
        return this.arregloIngredientes;
    }*/
}