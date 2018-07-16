import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {NoEncontradoException} from "../exceptions/noEncontrado.exception";

@Controller('usuario')
export class UsuarioController {

    constructor(private _usuarioService: UsuarioService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const usuarios = await this._usuarioService.traerTodos();
        return response.send(usuarios);
    }

    @Get('/:nombreArgumento/:contrasena')
    async buscarPorNombre(
        @Param() paramParams,
        @Res() response
    ) {
        let usuario = await this._usuarioService.obtenerUsuarioPorNombre(paramParams.nombreArgumento);

        if (usuario.contrasena === paramParams.contrasena) {
            return response.send(
                {respuesta: 'Aceptado'});
        } else {
            throw new NoEncontradoException(
                'No coinciden los datos',
                'error',
                4
            )
        }
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._usuarioService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Post()
    async crearUsuariosBase() {
        const usuarios = this._usuarioService.crearUsuario();
        return usuarios;
    }
}