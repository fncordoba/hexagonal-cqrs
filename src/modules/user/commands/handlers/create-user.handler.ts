import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserRepository } from '../../repositories/user.repository';
import { UserCreatedEvent } from '../../events/user-created.event';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand): Promise<void> {
    const { name, email } = command;

    // Guardar en MySQL
    const user = await this.userRepository.create({ name, email });

    // Emitir evento de dominio
    this.eventBus.publish(new UserCreatedEvent(user.id, user.name, user.email));
  }
}
