import { Controller } from '@nestjs/common';
import {
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common/decorators';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesServices: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesServices.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.coursesServices.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.coursesServices.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesServices.remove(id);
  }
}
