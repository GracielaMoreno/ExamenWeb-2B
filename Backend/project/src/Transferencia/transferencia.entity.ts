import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {IngredienteEntity} from "../ingrediente/ingrediente.entity";
import {ComidaEntity} from "../Comida/comida.entity";

@Entity('transferencia')
export class TransferenciaEntity {

    @PrimaryGeneratedColumn()
    id:number;

    //Relacion con usuario
    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.peticionesRealizadas)
    usuarioPide: UsuarioEntity;

    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.peticionesRecibidas)
    usuarioOfrece: UsuarioEntity;

    //Relacion con ingrediente
    @ManyToOne(
        type => IngredienteEntity,
        usuario => usuario.ingredientesPedidos)
    ingredientePedido: IngredienteEntity;

    @ManyToOne(
        type => IngredienteEntity,
        usuario => usuario.ingredientesOfertados)
    ingredienteOfertado: IngredienteEntity;

    @Column({ length: 100 })
    estado: string;
}