import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ComidaEntity} from "../Comida/comida.entity";
import {TransferenciaEntity} from "../Transferencia/transferencia.entity";

@Entity('usuario')
export class UsuarioEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombre: string;

    @Column({ length: 500 })
    contrasena: string;

    @Column({ length: 2000 })
    urlImg: string;

    @OneToMany(
        type => ComidaEntity,
        comida => comida.usuarioId)
    comidas: ComidaEntity [];

    @OneToMany(
        type => TransferenciaEntity,
        transferencia => transferencia.usuarioPide)
    peticionesRealizadas: TransferenciaEntity [];

    @OneToMany(
        type => TransferenciaEntity,
        transferencia => transferencia.usuarioOfrece)
    peticionesRecibidas: TransferenciaEntity [];
}