import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import { UserEntity } from './schemas/user.entity';
import { UserSchema } from './schemas/user.schema';
import { UserController } from './infrastructure/user.controller';

import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { UserCreatedHandler } from './events/handlers/user-created.handler';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([UserEntity]), // Configuración de MySQL
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), // Configuración de MongoDB
  ],
  controllers: [UserController],
  providers: [
    CreateUserHandler,
    GetUsersHandler,
    UserCreatedHandler,
    UserRepository,
  ],
})
export class UserModule {}
