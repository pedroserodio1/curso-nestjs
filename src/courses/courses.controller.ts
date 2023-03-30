import { Controller, HttpStatus } from '@nestjs/common';
import {
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  Res,
  Patch,
  Delete,
} from '@nestjs/common/decorators';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesServices: CoursesService) {}

  @Get()
  findAll(@Res() res): string {
    return res.status(200).send('Listagem de cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body: any): any {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body): any {
    return `Atualização do Curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: number): any {
    return `Exclusao do Curso #${id}`;
  }
}
