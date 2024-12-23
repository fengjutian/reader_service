import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ResponseDto } from '../response/response.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post('addbook')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  async findAll(
    @Query('pageNum') pageNum: number,
    @Query('pageSize') pageSize: number,
  ) {
    const data = await this.booksService.findAll({
      pageNum,
      pageSize,
    });
    return ResponseDto.ok(data);
  }

  @Get('/getBook')
  findOne(@Query('id') id: number, @Query('name') name: string) {
    console.log('id-----', id);
    return this.booksService.findOne(id, name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
