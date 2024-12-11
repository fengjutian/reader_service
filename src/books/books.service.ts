import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './entities/book.entity';
import { ObjectId, Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books)
    private bookRepository: Repository<Books>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  // findBooks() {
  //   return this.bookRepository.find();
  // }

  async findAll() {
    const books = await this.bookRepository.find({ cache: false });

    // const books = await this.bookRepository.findOneBy({
    //   id: 45,
    // });

    // console.log('books', books);

    // const books = await this.bookRepository.findOne({ id: 45 });
    // console.log('books', books);

    return books;
    // return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
