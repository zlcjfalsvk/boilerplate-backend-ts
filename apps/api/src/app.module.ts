import { Module } from '@nestjs/common';

import { DatabaseModule } from '@boilerplate-backend-ts/backend';

import { UsersControllerModule } from './controllers/users/users.controller.module';

@Module({
  imports: [DatabaseModule.forPostgre(), UsersControllerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
