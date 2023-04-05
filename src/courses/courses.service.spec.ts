import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { Connection, Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { TagEntity } from './entities/tag.entity';
import { NotFoundException } from '@nestjs/common';

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

/**
 * This function creates a mock repository with a `findOne` method that uses Jest's `fn()` function.
 */
const createMockRepository = <T = any>(): MockRepository<T> => ({
  findOne: jest.fn(),
});

describe('CourseService', () => {
  let service: CoursesService;
  let courseRepository: MockRepository;

  /* The `beforeEach` function is a hook provided by the Jest testing framework that runs before each
  test case in the test suite. In this case, it is used to set up the testing environment by
  creating a testing module using the `Test.createTestingModule` function provided by the NestJS
  testing utilities. The testing module is configured with the `CoursesService` provider and two
  mock repositories for the `Course` and `TagEntity` entities. The `service` and `courseRepository`
  variables are then initialized with the instances of the `CoursesService` and `MockRepository`
  classes obtained from the testing module using the `module.get` method. This ensures that the
  `CoursesService` and its dependencies are properly set up before each test case is run. */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoursesService,
        { provide: Connection, useValue: {} },
        {
          provide: getRepositoryToken(Course),
          useValue: createMockRepository(),
        },
        {
          provide: getRepositoryToken(TagEntity),
          useValue: createMockRepository(),
        },
      ],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
    courseRepository = module.get<MockRepository>(getRepositoryToken(Course));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /* This is a test suite for the `findOne` method of the `CoursesService` class. It contains two test
  cases, one to test if the method returns the expected course object when given a valid course id,
  and another to test if the method throws a `NotFoundException` when given an invalid course id.
  The `describe` function is used to group related test cases together, and the `it` function is
  used to define individual test cases. The `mockReturnValue` function is used to set up a mock
  return value for the `findOne` method of the `courseRepository` object, which is a mock repository
  created using the `createMockRepository` function. The `expect` function is used to define the
  expected behavior of the method being tested. */
  describe('findOne', () => {
    describe('Buscar curso pelo id', () => {
      it('Deve retornar o objeto Course', async () => {
        const courseId = 1;
        const expectedCourses = {};

        courseRepository.findOne.mockReturnValue(expectedCourses);
        const course = await service.findOne(courseId);

        expect(course).toEqual(expectedCourses);
      });

      it('Deve retornar um NotFoundException', async () => {
        const courseId = 1;

        courseRepository.findOne.mockReturnValue(undefined);

        try {
          await service.findOne(courseId);
        } catch (error) {
          expect(error).toBeInstanceOf(NotFoundException);
          expect(error.message).toEqual(
            `A course with id ${courseId} not found`,
          );
        }
      });
    });
  });
});
