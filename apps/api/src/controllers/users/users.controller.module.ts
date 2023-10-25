import { Module } from '@nestjs/common';

import { UserServiceModule } from '@boilerplate-backend-ts/backend';

import { UsersController } from './users.controller';

@Module({
  imports: [UserServiceModule],
  controllers: [UsersController],
})
export class UsersControllerModule {}
