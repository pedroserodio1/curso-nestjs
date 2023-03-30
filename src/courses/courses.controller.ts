import { Controller } from '@nestjs/common';
import { Get, Param, Post, Body } from '@nestjs/common/decorators';

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

  @Post()
  create(@Body() data: any): any {
    return data;
  }
}
