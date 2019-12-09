import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  photo: string;

  @Column()
  name: string;

  @Column()
  year: string;

  @Column()
  author: string;

  @ManyToOne(type => Category, category => category.films)
  category: Category;
}
