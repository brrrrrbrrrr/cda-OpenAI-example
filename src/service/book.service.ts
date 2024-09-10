import { InjectRepository } from '@nestjs/typeorm';
import { BookDtoPost } from 'src/dto/book.dto';
import { Book } from 'src/entity/book.entity';
import { Repository } from 'typeorm';

export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll() {
    return this.bookRepository.find();
  }

  async create(data: BookDtoPost) {
    const bookEntity = new Book();
    bookEntity.author = data.author;
    bookEntity.title = data.title;
    bookEntity.publishedYear = data.publishedYear;

    return await this.bookRepository.save(bookEntity);
  }

  async update(bookId: number, updateData: Partial<BookDtoPost>) {
    // Trouver le livre par ID
    const book = await this.bookRepository.findOne({
      where: { id: bookId },
    });

    if (!book) {
      throw new Error(`Book with ID ${bookId} not found`);
    }

    // Mettre à jour les propriétés du livre
    Object.assign(book, updateData);

    // Sauvegarder le livre mis à jour
    return await this.bookRepository.save(book);
  }
}
