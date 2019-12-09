import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Film } from './Film';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(type => Film, film => film.category)
  films: Film[];
}
