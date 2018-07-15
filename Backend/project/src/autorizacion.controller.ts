import {Body, Controller, Get, Post, Req, Res} from "@nestjs/common";

@Controller('Autorizacion')
export class AutorizacionController {

    @Post('IniciarSesion')
    iniciarSesion(
        @Body() bodyParams,
        @Req() request,
        @Res() response
    ) {
        if (bodyParams.usuario === 'adrianeguez' && bodyParams.password === '12345678910') {
            response.cookie('token', 'adrianeguez');
            return response.send({
                mensaje: 'OK'
            })
        }
        else {
            return response.send({
                mensaje: 'Los Datos no coinciden, no puede iniciar sesión'
            })
        }
    }

    @Get('anadirCookie')
    anadirCookie(
        @Res() response,
        @Req() request,
    ) {
        response.cookie('token', 'adrianeguez');
        return response.send();
    }

    @Get('modificarCookie')
    modificarCookie(
        @Res() response,
        @Req() request,
    ) {
        response.cookie('token', undefined);
        return response.send();
    }

    @Post('cerrarSesion')
    cerrarSesion(
        @Body() bodyParams,
        @Req() request,
        @Res() response
    ) {
        response.cookie('token', undefined);
        return response.send({
            mensaje: 'Usted salio del sistema'
        })
    }

}