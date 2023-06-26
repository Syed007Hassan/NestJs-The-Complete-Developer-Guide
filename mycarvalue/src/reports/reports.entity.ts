import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('reports') // This is the name of the table in the database
export class Report {
  @PrimaryColumn()
  id: number;

  @Column()
  price: number;
}
