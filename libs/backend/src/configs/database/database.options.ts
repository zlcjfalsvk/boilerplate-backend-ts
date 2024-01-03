import { ConfigService } from '@nestjs/config';

import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const postgreOptions = (
  configService: ConfigService,
): PostgresConnectionOptions => ({
  type: 'postgres',
  host: configService.get<string>('postgre.host'),
  port: configService.get<number>('postgre.port'),
  database: configService.get<string>('postgre.database'),
  username: configService.get<string>('postgre.username'),
  password: configService.get<string>('postgre.password'),
  synchronize: configService.get<boolean>('postgre.synchronize') || false,
  logging: configService.get('postgre.useLogging') || false,
});
