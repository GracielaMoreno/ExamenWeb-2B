export interface Ingrediente {
  id: number,
  nombreIngrediente: string,
  cantidad: number,
  descripcionPreparacion: string,
  opcional: boolean,
  tipoIngrediente: string,
  necesitaRefrigeracion: boolean,
  comidaId: number
}
