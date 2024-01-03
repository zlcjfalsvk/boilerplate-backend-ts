import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import PostgreEnv from '../env/postgre.env';
import { postgreOptions } from './database.options';
import { postgreEntities } from '../../entities';

@Module({
  imports: [],
})
export class DatabaseModule {
  static forPostgre(): DynamicModule {
    return {
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule.forFeature(PostgreEnv)],
          useFactory: (configService: ConfigService) => ({
            ...postgreOptions(configService),
            entities: [...postgreEntities],
          }),
          inject: [ConfigService],
        }),
      ],
      module: DatabaseModule,
    };
  }
}
