import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ComidaController} from "./Comida/comida.controller";
import {IngredienteController} from "./ingrediente/ingrediente.controller";
import {ComidaService} from "./Comida/comida.service";
import {AutorizacionController} from "./autorizacion.controller";
import {IngredienteService} from "./ingrediente/ingrediente.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsuarioEntity} from "./Usuario/usuario.entity";
import {ComidaEntity} from "./Comida/comida.entity";
import {IngredienteEntity} from "./ingrediente/ingrediente.entity";
import {UsuarioController} from "./Usuario/usuario.controller";
import {UsuarioService} from "./Usuario/usuario.service";

@Module({
  imports: [
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'web',
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
          //ssl: true,
      }),
      TypeOrmModule.forFeature([ComidaEntity,IngredienteEntity,UsuarioEntity])
  ],
  controllers: [
      AppController,
      ComidaController,
      IngredienteController,
      AutorizacionController,
      UsuarioController],
  providers: [
      AppService,
      ComidaService,
      IngredienteService,
      UsuarioService
     ],
})

export class AppModule {}
