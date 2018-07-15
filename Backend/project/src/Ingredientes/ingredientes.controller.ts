import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {GeneralPipe} from "../general.pipe";
import {IngredientesService} from "./ingredientes.service";
import {INGREDIENTES_SCHEMA} from "./ingredientes.schema";
import {IngredientesClass} from "./ingredientes.class";
import {NoEncontradoException} from "../exceptions/noEncontrado.exception";


@Controller('Ingredientes')
export class IngredientesController {

    constructor(private _ingredienteService: IngredientesService) {}

    @Get()
    listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const ingredientes = this._ingredienteService.mostrarTodos();
        return response.send(ingredientes);
    }

    @Post()
    crearIngrediente(
        @Body(new GeneralPipe(INGREDIENTES_SCHEMA)) ingredienteArgumento
    ): IngredientesClass[] {
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
    }
}