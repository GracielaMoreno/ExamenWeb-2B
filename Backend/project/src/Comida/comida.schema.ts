import * as Joi from 'joi';
//Installar Joi
export const COMIDA_SCHEMA = Joi
    .object()
    .keys({
            id: Joi
                .number()
                .integer()
                .required(),
            nombrePlato: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z ]{3,30}$/)
                .min(3)
                .max(30),
            descripcionPlato: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z ]{5,40}$/)
                .min(5)
                .max(40),
            nacionalidad: Joi
                .string()
                .required()
                .regex(/^[a-zA-Z]{3,30}$/)
                .min(3)
                .max(30),
            numeroPersonas: Joi
                .number()
                .integer()
                .required(),
            picante: Joi
                .boolean()
                .required(),
        }
    )