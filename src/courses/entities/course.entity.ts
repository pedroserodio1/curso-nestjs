/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from 'typeorm';
import { TagEntity } from './tag.entity/tag.entity';

@Entity('courses')
export class Course {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @JoinTable()
  @ManyToMany(() => TagEntity, (tag) => tag.courses)
  tags: string[];
}
