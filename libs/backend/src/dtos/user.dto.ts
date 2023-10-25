import { UserDtoInterface } from '@boilerplate-backend-ts/common';
export class UserDto implements UserDtoInterface {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  static of(param: Partial<UserDtoInterface>): UserDtoInterface {
    const dto = new UserDto();
    if (param.id) {
      dto.id = param.id;
    }
    if (param.name) {
      dto.name = param.name;
    }
    if (param.email) {
      dto.email = param.email;
    }
    if (param.createdAt) {
      dto.createdAt = param.createdAt;
    }
    if (param.updatedAt) {
      dto.updatedAt = param.updatedAt;
    }

    return dto;
  }
}
