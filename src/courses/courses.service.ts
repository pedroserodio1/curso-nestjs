import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Course NestJs',
      description: 'Fundamentos do framework nestJs',
      tags: ['nestJs', 'js', 'node.s', 'backend'],
    },
  ];

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: number): Course {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCourseDTO: any) {
    this.courses.push(createCourseDTO);
  }

  update(id: number, updateCourseDTO: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourseDTO;
  }

  remove(id: number) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
