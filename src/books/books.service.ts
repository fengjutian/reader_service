import { Injectable, Logger } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private bookRepository: Repository<Books>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(createBookDto: CreateBookDto) {
    const res = await this.bookRepository.save(createBookDto);

    return res;
  }

  async findAll(paramsObj: { pageNum: number; pageSize: number }) {
    const books = await this.bookRepository.find({
      cache: false,
      skip: (paramsObj.pageNum - 1) * paramsObj.pageSize,
      take: paramsObj.pageSize,
    });
    // const books = await this.bookRepository.findOneBy({
    //   id: 45,
    // });

    // console.log('books', books);

    // const books = await this.bookRepository.findOne({ id: 45 });
    // console.log('books', books);

    return books;
    // return `This action returns all books`;
  }

  async findOne(id: number, name: string) {
    Logger.log(id, name);
    const book = await this.bookRepository.find({ where: { id, name } });
    return book;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  async remove(id: number) {
    const msg = await await this.bookRepository.delete(id);
    console.log('msg', msg);
    return msg;
  }
}
