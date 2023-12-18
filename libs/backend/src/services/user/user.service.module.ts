import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { UserRepositoryModule } from '../../repositories';

@Module({
  imports: [UserRepositoryModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserServiceModule {}
