import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from '../create-course.dto/create-course.dto';

//partial types permite usar os tipos da class createCourseDto sem a obrigatoriedade dos dados dela, permitindo enviar apenas um ou todos. Importa tambem as regras de validação do class validator
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
