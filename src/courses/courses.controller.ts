import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(): string {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `Curso #${id}`;
  }
}
