import { Injectable } from '@nestjs/common';

import { UserDtoInterface } from '@boilerplate-backend-ts/common';
import { UserDto } from '../../dtos';

@Injectable()
export class UserService {
  getUsers(): UserDtoInterface[] {
    return [
      UserDto.of({
        id: '1',
        name: 'cheolcheol',
        email: 'zl6863vk@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ];
  }
}
