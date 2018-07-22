import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ComidaEntity} from "../Comida/comida.entity";
import {TransferenciaEntity} from "../Transferencia/transferencia.entity";

@Entity('ingrediente')
export class IngredienteEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombreIngrediente: string;

    @Column('float')
    cantidad: number;

    @Column({ length: 500 })
    descripcionPreparacion: string;

    @Column()
    opcional: boolean;

    @Column({ length: 5})
    tipoIngrdiente: string;

    @Column()
    necesitaRefrigeracion: boolean;

    @Column({ length: 2000 })
    urlImg: string;

    //Relacion con comida
    @ManyToOne(
        type => ComidaEntity,
        comida => comida.ingredientes)
    comidaId: ComidaEntity;

    @OneToMany(
        type => TransferenciaEntity,
        transferencia => transferencia.ingredientePedido)
    ingredientesPedidos: TransferenciaEntity [];

    @OneToMany(
        type => TransferenciaEntity,
        transferencia => transferencia.ingredienteOfertado)
    ingredientesOfertados: TransferenciaEntity [];
}