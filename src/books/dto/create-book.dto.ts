import { Entity, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';
@Entity()
export class CreateBookDto {
  // 标题
  @ApiProperty()
  @IsString()
  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  // 副标题
  @ApiProperty()
  @IsString()
  @Column({ name: 'sub_name', length: 255 })
  sub_name: string;

  // 作者
  @ApiProperty()
  @IsString()
  @Column({ length: 255 })
  author: string;

  // 出版社
  @ApiProperty()
  @Column()
  @IsString()
  publishing_house: string;

  // 出品方
  @ApiProperty()
  @Column()
  @IsString()
  producer: string;

  // 原作者
  @ApiProperty()
  @Column()
  @IsString()
  original_author: string;

  // 译者
  @ApiProperty()
  @Column()
  @IsString()
  translator: string;

  // 出版年
  @ApiProperty()
  @Column()
  @IsString()
  year_of_publication: string;

  // 页数
  @ApiProperty()
  @Column()
  @IsString()
  pages_num: string;

  // 售价
  @ApiProperty()
  @Column()
  @IsString()
  price: string;

  // 装帧
  @ApiProperty()
  @Column()
  @IsString()
  binding_and_layout: string;

  // ISBN
  @ApiProperty()
  @Column()
  @IsString()
  ISBN: string;

  // 描述
  @ApiProperty()
  @IsString()
  @Column({ type: 'text' })
  describe: string;
}
