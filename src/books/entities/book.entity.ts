import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  // 标题
  @Column()
  name: string;

  // 副标题
  @Column()
  sub_name: string;

  // 作者
  @Column()
  author: string;

  // 出版社
  @Column()
  publishing_house: string;

  // 出品方
  @Column()
  producer: string;

  // 原作者
  @Column()
  original_author: string;

  // 译者
  @Column()
  year_of_publication: string;

  // 页数
  @Column()
  pages_num: string;

  // 售价
  @Column()
  price: string;

  // 装帧
  @Column()
  binding_and_layout: string;

  // ISBN
  @Column()
  ISBN: string;

  // 描述
  @Column({ type: 'text' })
  describe: string;
}
