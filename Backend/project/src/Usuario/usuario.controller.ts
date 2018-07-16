import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";

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

    @Post()
    async crearUsuariosBase() {
        const usuarios = this._usuarioService.crearUsuario();
        return usuarios;
    }
}