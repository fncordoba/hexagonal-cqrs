import { Controller, Post, Get, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create-user.command';
import { GetUsersQuery } from '../queries/get-users.query';
import { CreateUserDto } from '../commands/dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    return this.commandBus.execute(new CreateUserCommand(name, email));
  }

  @Get()
  async getUsers() {
    return this.queryBus.execute(new GetUsersQuery());
  }
}
