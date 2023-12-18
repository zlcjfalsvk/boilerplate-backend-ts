import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/index';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async find(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }
}
