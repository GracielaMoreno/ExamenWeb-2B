import { Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ComidaEntity} from "./comida.entity";
import {Like, Repository} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";


@Injectable()
export class ComidaService {

    /*arregloComidas: ComidaClass[] = [new ComidaClass(1,'Salchi', 'Papas y salchica', 'Ecuador', 2,true)];*/

    listaComidas = [
        {'id': 1, 'nombrePlato': 'Salchi', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 8},
        {'id': 2, 'nombrePlato': 'Tacos', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 6},
        {'id': 3, 'nombrePlato': 'Pastel Chocolate', 'descripcionPlato': 'Delicioso pastel con chocolate', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 1},
        {'id': 4, 'nombrePlato': 'Pizza', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 3},
        {'id': 5, 'nombrePlato': 'Alitas BBQ', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 5},
        {'id': 6, 'nombrePlato': 'Pollo Jardinero', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 2},
        { 'id': 7, 'nombrePlato': 'Torta de Naranja', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 5, 'picante': false, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 4},
        { 'id': 8, 'nombrePlato': 'Arroz relleno', 'descripcionPlato': 'Arroz con pollo, arvejas y pimiento', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 5, 'picante': false, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 7}
    ];

    constructor(@InjectRepository(ComidaEntity)
                private readonly comidaRepository: Repository<ComidaEntity>){
    }

    crearComidas() {
        for(var comidas in this.listaComidas) {
            const comida = new ComidaEntity();
            comida.id = this.listaComidas[comidas].id;
            comida.nombrePlato = this.listaComidas[comidas].nombrePlato;
            comida.descripcionPlato = this.listaComidas[comidas].descripcionPlato;
            comida.nacionalidad = this.listaComidas[comidas].nacionalidad;
            comida.numeroPersonas =this.listaComidas[comidas].numeroPersonas;
            comida.picante = this.listaComidas[comidas].picante;
            comida.urlImg =  this.listaComidas[comidas].urlImg;
            const usuario = new UsuarioEntity();
            usuario.id = this.listaComidas[comidas].usuarioId;
            comida.usuarioId = usuario;
            this.comidaRepository.save(comida);
        }
        return this.comidaRepository.find();
    }

    async traerTodos(): Promise<ComidaEntity[]> {
        return await this.comidaRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.comidaRepository.find({ nombrePlato: Like("%" + parametroBusqueda + "%") });
    }

    async traerComidaPorUsuario(usuarioID): Promise<ComidaEntity[]> {
        return await this.comidaRepository.find({where: {usuarioId: usuarioID}});
    }

    /*agregarComida(comida: ComidaClass): ComidaClass[] {
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
    }*/
}
