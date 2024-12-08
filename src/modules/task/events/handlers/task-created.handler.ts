import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { TaskCreatedEvent } from '../task-created.event';

@EventsHandler(TaskCreatedEvent)
export class TaskCreatedHandler implements IEventHandler<TaskCreatedEvent> {
  handle(event: TaskCreatedEvent): void {
    console.log('Task Created Event:', event);
    // Lógica para manejar el evento
  }
}
