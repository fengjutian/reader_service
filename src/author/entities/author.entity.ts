import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'author' })
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  // 姓名
  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  // 性别
  @Column({ name: 'gender', length: 255 })
  gender: string;

  // 出生日期
  @Column({ length: 255 })
  date_of_birth: string;
}
