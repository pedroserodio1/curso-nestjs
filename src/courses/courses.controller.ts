import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(): string {
    return 'Listagem de cursos';
  }
}
