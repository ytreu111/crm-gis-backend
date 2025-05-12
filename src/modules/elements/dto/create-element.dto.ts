import { ApiProperty } from '@nestjs/swagger'
import { IsCuid } from '@/common/class-validator'

export class CreateElementDto {
  @ApiProperty()
  @IsCuid()
  directory_id: string

  [key: string]: any
}