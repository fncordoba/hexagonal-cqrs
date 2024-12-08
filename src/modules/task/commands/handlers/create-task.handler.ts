import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTaskCommand } from '../create-task.command';

@CommandHandler(CreateTaskCommand)
export class CreateTaskHandler implements ICommandHandler<CreateTaskCommand> {
  async execute(command: CreateTaskCommand): Promise<void> {
    const { data } = command;
    console.log('Creating Task', data);
    // Lógica para crear un Task
  }
}
