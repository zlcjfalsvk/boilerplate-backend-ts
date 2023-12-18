import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from '../../entities/index';
import { UserRepositoryService } from './user.repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserRepositoryService],
  exports: [UserRepositoryService],
})
export class UserRepositoryModule {}
