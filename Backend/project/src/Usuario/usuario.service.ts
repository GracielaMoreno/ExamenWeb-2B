import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsuarioService {

    listaUsuarios = [
        {'id': 1, 'nombre': 'Mayra', 'contrasena': '1234', 'urlImg': 'http://www.glitztvla.com/wp-content/uploads/2016/03/6-caminos-para-volverte-una-persona-menos-toxica.jpg'},
        {'id': 2, 'nombre': 'Liz', 'contrasena': '1234', 'urlImg': 'http://www.glitztvla.com/wp-content/uploads/2016/03/6-caminos-para-volverte-una-persona-menos-toxica.jpg'},
        {'id': 3, 'nombre': 'Sofi', 'contrasena': '1234', 'urlImg': 'http://www.glitztvla.com/wp-content/uploads/2016/03/6-caminos-para-volverte-una-persona-menos-toxica.jpg'},
        {'id': 4, 'nombre': 'Pedro', 'contrasena': '1234', 'urlImg': 'https://sm.askmen.com/askmen_latam/photo/default/groundworkcounselingcom_ve7f.png'},
        {'id': 5, 'nombre': 'Martin', 'contrasena': '1234', 'urlImg': 'https://sm.askmen.com/askmen_latam/photo/default/groundworkcounselingcom_ve7f.png'},
        {'id': 6, 'nombre': 'David', 'contrasena': '1234', 'urlImg': 'https://sm.askmen.com/askmen_latam/photo/default/groundworkcounselingcom_ve7f.png'},
        {'id': 7, 'nombre': 'Paula', 'contrasena': '1234', 'urlImg': 'http://www.glitztvla.com/wp-content/uploads/2016/03/6-caminos-para-volverte-una-persona-menos-toxica.jpg'},
        {'id': 8, 'nombre': 'Rodrigo', 'contrasena': '1234', 'urlImg': 'https://sm.askmen.com/askmen_latam/photo/default/groundworkcounselingcom_ve7f.png'}
    ];

    constructor(@InjectRepository(UsuarioEntity)
                private readonly usuarioRepository: Repository<UsuarioEntity>){
    }

    crearUsuario() {
        for(var usuarios in this.listaUsuarios) {
            const usuario = new UsuarioEntity();
            usuario.id = this.listaUsuarios[usuarios].id;
            usuario.nombre = this.listaUsuarios[usuarios].nombre;
            usuario.contrasena = this.listaUsuarios[usuarios].contrasena;
            usuario.urlImg = this.listaUsuarios[usuarios].urlImg;
            this.usuarioRepository.save(usuario);
        }
        return this.usuarioRepository.find();
    }

    async traerTodos(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find();
    }

    async obtenerUsuarioPorNombre(nombreArgumento) {
        return await this.usuarioRepository.
        createQueryBuilder("usuario").where("usuario.nombre = :nombre", { nombre: nombreArgumento }).getOne();
    }

}