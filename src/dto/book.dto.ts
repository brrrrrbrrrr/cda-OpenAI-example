import { ApiProperty } from '@nestjs/swagger';

export class BookDtoGet {
  @ApiProperty({ example: 1, description: "ID de L'utilisateur" })
  id: number;

  @ApiProperty({ example: 'Livre du flemmard', description: 'Titre du livre' })
  title: string;

  @ApiProperty({ example: 'brbr', description: 'Auteur du livre' })
  author: string;

  @ApiProperty({ example: '2020', description: 'Année de publication' })
  publishedYear: number;
}

export class BookDtoPost {
  @ApiProperty({
    example: 'Livre du flemmard, deuxieme partie',
    description: 'Titre du livre',
  })
  title: string;

  @ApiProperty({ example: 'brbr', description: 'Auteur du livre' })
  author: string;

  @ApiProperty({ example: '2024', description: 'Année de publication' })
  publishedYear: number;
}
