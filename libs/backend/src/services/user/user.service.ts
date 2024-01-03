import { Injectable } from '@nestjs/common';

import { UserDtoInterface } from '@boilerplate-backend-ts/common';

import { UserDto } from '../../dtos';
import { UserRepositoryService } from '../../repositories';

@Injectable()
export class UserService {
  constructor(private readonly userRepositoryService: UserRepositoryService) {}
  async getUsers(): Promise<UserDtoInterface[]> {
    const userEntities = await this.userRepositoryService.find();
    return userEntities.map((i) => UserDto.of(i));
  }
}
