import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {ComidaService} from "./comida.service";
import {ComidaEntity} from "./comida.entity";

@Controller('Comida')
export class ComidaController {

    constructor(private _comidaService: ComidaService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const comidas = await this._comidaService.traerTodos();
        return response.send(comidas);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._comidaService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Post()
    async crearComidaBase() {
        const comidas = this._comidaService.crearComidas();
        return comidas;
    }

    /*@Get('/:id')
    obtenerUno(
        @Param() paramParams,
        @Res() response
    ) {
        const comidaPorId = this._comidaService.mostrarUnoPorId(paramParams.id);

        if (comidaPorId === undefined) {
            throw new NoEncontradoException(
                'No se encontro ningun elemento con ese id',
                'error',
                4
            )
        } else {
            return response.send(comidaPorId);
        }
    }

    @Put('/:id')
    editarUno(
        @Param() paramParams,
        @Body(new GeneralPipe(COMIDA_SCHEMA)) comidaArgumento,
        @Res() response
    ) {
        if (this._comidaService.mostrarUnoPorId(paramParams.id) !== undefined) {
            return response.send(this._comidaService.editarUnoPorId(paramParams.id, comidaArgumento));
        } else {
            throw new NoEncontradoException(
                'No se encontro ningun elemento para editar con ese id',
                'error',
                4
            )
        }
    }*/
}