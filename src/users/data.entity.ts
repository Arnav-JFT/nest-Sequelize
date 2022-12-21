import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Cat extends Model {



  @Column({
    primaryKey:true 
  })
  id:string

  @Column
  name: string;

  @Column
  job: string;

  @Column
  salary: number;
}
