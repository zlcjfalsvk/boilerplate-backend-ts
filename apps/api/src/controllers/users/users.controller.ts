import { Controller, Get } from '@nestjs/common';
import { UserService } from '@boilerplate-backend-ts/backend';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
