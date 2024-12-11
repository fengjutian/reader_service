import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private bookRepository: Repository<Book>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  // findBooks() {
  //   return this.bookRepository.find();
  // }

  async findAll() {
    const books = this.bookRepository.find();
    console.log(books);

    // const allUsers = await Book.find();
    // console.log('allUsers', allUsers);
    // return Book.find();
    return `This action returns all books`;
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
