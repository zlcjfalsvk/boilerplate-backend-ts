import { registerAs } from '@nestjs/config';

export default registerAs('postgre', () => ({
  host: process.env['POSTGRE_HOST'],
  port: process.env['POSTGRE_PORT'],
  database: process.env['POSTGRE_DATABASE'],
  username: process.env['POSTGRE_USERNAME'],
  password: process.env['POSTGRE_PASSWORD'],
  synchronize: !!process.env['POSTGRE_USE_SYNC'],
  useLogging: !!process.env['POSTGRE_USE_LOGGING'],
}));
