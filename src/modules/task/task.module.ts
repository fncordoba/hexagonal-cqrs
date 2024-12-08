import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TaskController } from './infrastructure/task.controller';
import { TaskEntity } from './schemas/task.entity';
import { TaskSchema } from './schemas/task.schema';

import { CreateTaskHandler } from './commands/handlers/create-task.handler';
import { GetTaskHandler } from './queries/handlers/get-task.handler';
import { TaskCreatedHandler } from './events/handlers/task-created.handler';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([TaskEntity]),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  controllers: [TaskController],
  providers: [
    CreateTaskHandler,
    GetTaskHandler,
    TaskCreatedHandler,
  ],
})
export class TaskModule {}
