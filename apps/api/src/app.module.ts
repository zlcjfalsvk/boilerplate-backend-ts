import { Module } from '@nestjs/common';
import { UsersControllerModule } from './controllers/users/users.controller.module';

@Module({
  imports: [UsersControllerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
