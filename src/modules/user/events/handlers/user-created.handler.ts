import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../user-created.event';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from '../../schemas/user.schema';

@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async handle(event: UserCreatedEvent): Promise<void> {
    const { id, name, email } = event;

    // Sincroniza MongoDB con el nuevo usuario
    await this.userModel.create({
      _id: id,
      name: name,
      email: email,
    });

    console.log(`Usuario sincronizado en MongoDB: ${name}`);
  }
}
