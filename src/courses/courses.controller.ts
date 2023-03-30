import { Controller, HttpStatus } from '@nestjs/common';
import {
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  Res,
} from '@nestjs/common/decorators';

@Controller('courses')
export class CoursesController {
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
  create(@Body() data: any): any {
    return data;
  }
}
