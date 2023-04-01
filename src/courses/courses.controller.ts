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
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';

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
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesServices.create(createCourseDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesServices.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesServices.remove(id);
  }
}
