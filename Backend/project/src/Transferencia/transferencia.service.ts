import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {TransferenciaEntity} from "./transferencia.entity";
import {IngredienteEntity} from "../ingrediente/ingrediente.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export class TransferenciaService {

    listaTransferencias = [
        {usuarioPide: 1, usuarioOfrece: 2, ingredientePedido: 9, ingredienteOfertado: 12, estado: 'En espera'},
        {usuarioPide: 2, usuarioOfrece: 1, ingredientePedido: 5, ingredienteOfertado: 9, estado: 'En espera'},
    ];
    constructor(@InjectRepository(TransferenciaEntity)
                private readonly transferenciaRepository: Repository<TransferenciaEntity>){
    }
    crearTransferencia(usuarioPideId, usuarioOfreceId, ingreidentePedidoId, ingredienteOfrecidoId) {
        const transferencia = new TransferenciaEntity();
        const usuarioPide =  new UsuarioEntity();
        usuarioPide.id = usuarioPideId;
        transferencia.usuarioPide = usuarioPide;
        const usuarioOfrece =  new UsuarioEntity();
        usuarioOfrece.id = usuarioOfreceId;
        transferencia.usuarioOfrece =  usuarioOfrece;
        const ingredientePedido = new IngredienteEntity();
        ingredientePedido.id = ingreidentePedidoId;
        transferencia.ingredientePedido = ingredientePedido;
        const ingredienteOfrecido = new IngredienteEntity();
        ingredienteOfrecido.id = ingredienteOfrecidoId;
        transferencia.ingredienteOfertado = ingredienteOfrecido;
        transferencia.estado = "En Espera";
        console.log(JSON.stringify(transferencia));
        this.transferenciaRepository.save(transferencia);
    }

    crearTransferenciasLista() {
        for(var transferencias in this.listaTransferencias) {
            const transferencia = new TransferenciaEntity();
            const usuarioPide =  new UsuarioEntity();
            usuarioPide.id = this.listaTransferencias[transferencias].usuarioPide;
            transferencia.usuarioPide = usuarioPide;
            const usuarioOfrece =  new UsuarioEntity();
            usuarioOfrece.id = this.listaTransferencias[transferencias].usuarioOfrece;
            transferencia.usuarioOfrece =  usuarioOfrece;
            const ingredientePedido = new IngredienteEntity();
            ingredientePedido.id = this.listaTransferencias[transferencias].ingredientePedido;
            transferencia.ingredientePedido = ingredientePedido;
            const ingredienteOfrecido = new IngredienteEntity();
            ingredienteOfrecido.id = this.listaTransferencias[transferencias].ingredienteOfertado;
            transferencia.ingredienteOfertado = ingredienteOfrecido;
            transferencia.estado = this.listaTransferencias[transferencias].estado;
            this.transferenciaRepository.save(transferencia);
        }
        return this.transferenciaRepository.find();
    }

    async traerTodos(): Promise<TransferenciaEntity[]> {
        return await this.transferenciaRepository.find();
    }
    async traerPeticionesRealizadasPorUsuario(usuarioID): Promise<TransferenciaEntity[]> {
        let transferencias = await this.transferenciaRepository.createQueryBuilder("transferencia").innerJoinAndSelect("transferencia.ingredientePedido", "ingredienteP").innerJoinAndSelect("transferencia.ingredienteOfertado", "ingredienteO").where("transferencia.usuarioPide = " + usuarioID).getMany();
        return transferencias;
    }
    async traerPeticionesRecibidasPorUsuario(usuarioID): Promise<TransferenciaEntity[]> {
        let transferencias = await this.transferenciaRepository.createQueryBuilder("transferencia").innerJoinAndSelect("transferencia.ingredientePedido", "ingredienteP").innerJoinAndSelect("transferencia.ingredienteOfertado", "ingredienteO").innerJoinAndSelect("transferencia.usuarioPide", "usuario").where("transferencia.usuarioOfrece = " + usuarioID).getMany();
        return transferencias;
    }
    /*async buscar(parametroBusqueda) {
    return await this.comidaRepository.find({ nombrePlato: Like("%" + parametroBusqueda + "%") });
    }

    async traerComidaPorUsuario(usuarioID): Promise<ComidaEntity[]> {
        return await this.comidaRepository.find({where: {usuarioId: usuarioID}});
    }*/
}