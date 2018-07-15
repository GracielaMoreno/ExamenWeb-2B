import * as Joi from 'joi';
//Installar Joi
export const INGREDIENTES_SCHEMA = Joi
    .object()
    .keys({
        id: Joi
            .number()
            .integer()
            .required(),
        nombreIngrediente: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,30}$/)
            .min(3)
            .max(30),
        cantidad: Joi
            .number()
            .required(),
        descripcionPreparacion: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,150}$/)
            .min(3)
            .max(150),
        opcional: Joi
            .boolean()
            .required(),
        tipoIngrediente: Joi
            .string()
            .required()
            .regex(/^[a-zA-Z ]{3,30}$/)
            .min(3)
            .max(30),
        necesitaRefrigeracion: Joi
            .boolean()
            .required(),
        comidaId: Joi
            .number()
            .integer()
            .required(),
        }
    )