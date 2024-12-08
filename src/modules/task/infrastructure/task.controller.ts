import { Controller, Post, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
  @Post()
  async create() {
    // Lógica para crear
    return 'Create Task';
  }

  @Get()
  async findAll() {
    // Lógica para listar
    return 'Get all Task';
  }
}
