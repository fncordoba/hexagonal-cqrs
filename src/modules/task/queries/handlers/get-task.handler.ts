import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetTaskQuery } from '../get-task.query';

@QueryHandler(GetTaskQuery)
export class GetTaskHandler implements IQueryHandler<GetTaskQuery> {
  async execute(query: GetTaskQuery): Promise<any> {
    console.log('Fetching Task');
    // Lógica para obtener un Task
    return [];
  }
}
