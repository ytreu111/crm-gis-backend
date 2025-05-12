import { Elements } from '@prisma-client'
import { ApiProperty } from '@nestjs/swagger'
import { IsCuid } from '@/common/class-validator'


export class ElementDto {
  @ApiProperty()
  @IsCuid()
  id: string

  @ApiProperty()
  @IsCuid()
  directory_id: string

  [key: string]: any

  constructor(element: Elements) {
    Object.assign(this, element.data)

    this.id = element.id
    this.directory_id = element.directory_id
  }
}

export class ElementMapper {
  static toDto(element: Elements): ElementDto {
    return new ElementDto(element)
  }
}