import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from 'src/service/book.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BookDtoGet, BookDtoPost } from 'src/dto/book.dto';

@ApiTags('/book')
@Controller('/book')
export class BookControoller {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({ summary: 'Récupérer une liste de livres' })
  @ApiResponse({ status: 200, type: [BookDtoGet] })
  @Get('/')
  async findAll(): Promise<BookDtoGet[]> {
    return await this.bookService.findAll();
  }

  @ApiOperation({ summary: "Création d'un livre" })
  @ApiResponse({ status: 201, type: [BookDtoPost] })
  @Post('/')
  async create(@Body() data: BookDtoPost): Promise<BookDtoPost> {
    return await this.bookService.create(data);
  }

  @ApiOperation({ summary: "Modification d'un livre" })
  @ApiResponse({
    status: 200,
    type: [BookDtoGet],
  })
  @Put(':bookId')
  async update(
    @Param('bookId') bookId: number,
    @Body() updateData: Partial<BookDtoPost>,
  ) {
    try {
      return await this.bookService.update(bookId, updateData);
    } catch (err) {
      throw new NotFoundException(err.message);
    }
  }
}
