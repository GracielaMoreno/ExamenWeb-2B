import {ArgumentMetadata, Injectable, PipeTransform} from '@nestjs/common';

import * as Joi from 'joi';
import {PeticionInvalidaException} from "./exceptions/peticion-invalida.exception";

@Injectable()
export class GeneralPipe implements PipeTransform {

    constructor(private readonly schema) {}
    transform(
        valorEnBrutoDelRequest: any,
        metadatosDeLosDecoradoresDelNestjs: ArgumentMetadata) {

        const {
            error
        } = Joi.validate(
            valorEnBrutoDelRequest, // objeto a validar
            this.schema // un esquema
        );
        if (error) {
            throw new PeticionInvalidaException(
                'Peticion invalida',
                error,
                4
            );
        }
        return valorEnBrutoDelRequest;
    }
}