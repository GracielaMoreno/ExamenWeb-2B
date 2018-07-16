import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {IngredienteService} from "./ingrediente.service";
import {IngredienteEntity} from "./ingrediente.entity";

@Controller('Ingrediente')
export class IngredienteController {

    constructor(private _ingredienteService: IngredienteService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const ingredientes = await this._ingredienteService.traerTodos();
        return response.send(ingredientes);
    }

    @Post()
    async crearIngredientesBase() {
        const ingredientes = this._ingredienteService.crearIngredientes();
        return ingredientes;
    }

    /*@Post()
    crearIngrediente(
        @Body(new GeneralPipe(INGREDIENTES_SCHEMA)) ingredienteArgumento
    ): IngredienteClass[] {
        const ingrediente = ingredienteArgumento;
        return this._ingredienteService.agregarIngrediente(ingrediente);
    }

    @Get('/:id')
    obtenerUno(
        @Param() paramParams,
        @Res() response
    ) {
        const ingredientePorId = this._ingredienteService.mostrarUnoPorId(paramParams.id);
        const error = (ingredientePorId === undefined);
        if (error) {
            throw new NoEncontradoException(
                'No se encontro ningun elemento con ese id',
                'error',
                4
                )
        } else {
            return response.send(ingredientePorId);
        }
    }

    @Put('/:id')
    editarUno(
        @Param() paramParams,
        @Body(new GeneralPipe(INGREDIENTES_SCHEMA)) ingredienteArgumento,
        @Res() response
    ) {
        if (this._ingredienteService.mostrarUnoPorId(paramParams.id) !== undefined) {
            return response.send(this._ingredienteService.editarUnoPorId(paramParams.id, ingredienteArgumento));
        } else {
            throw new NoEncontradoException(
                'No se encontro ningun elemento con ese id',
                'error',
                4
            )
        }
    }*/
}