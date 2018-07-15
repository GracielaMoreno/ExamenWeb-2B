export class IngredientesClass {

    constructor(
        public id: number,
        public nombreIngrediente: string,
        public cantidad: number,
        public descripcionPreparacion: string,
        public opcional: boolean,
        public tipoIngrediente: string,
        public necesitaRefrigeracion: boolean,
        public comidaId: number
    ){}

}