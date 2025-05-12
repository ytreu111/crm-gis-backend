import { Directory } from '@prisma-client'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class DirectoryResponseDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiPropertyOptional()
  description?: string

  constructor(directory: Directory) {
    this.id = directory.id
    this.name = directory.name

    if (directory.description) {
      this.description = directory.description
    }
  }
}