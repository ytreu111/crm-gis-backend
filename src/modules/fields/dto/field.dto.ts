import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'
import { DirectoryFieldType } from '@prisma-client'
import { OmitType } from '@nestjs/mapped-types'

export class CreateFieldDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  // @ApiProperty()
  // @IsString()
  // @IsNotEmpty()
  // directory_id: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string

  @ApiProperty({ enum: DirectoryFieldType })
  @IsEnum(DirectoryFieldType)
  type: (typeof DirectoryFieldType)[keyof typeof DirectoryFieldType]

  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  required?: boolean

  @ApiProperty()
  @IsNumber()
  order: number

  @ApiPropertyOptional({ default: true })
  @IsBoolean()
  @IsOptional()
  show_in_list?: boolean
}

export class UpdateFieldDto extends OmitType(CreateFieldDto, ['directory_id'] as const) {
}

export class FieldResponseDto {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  directory_id: string

  @ApiProperty()
  code: string

  @ApiProperty({ enum: DirectoryFieldType })
  type: (typeof DirectoryFieldType)[keyof typeof DirectoryFieldType]

  @ApiProperty()
  required: boolean

  @ApiProperty()
  order: number

  @ApiProperty()
  show_in_list?: boolean

  constructor(field) {
    this.id = field.id
    this.name = field.name
    this.directory_id = field.directory_id
    this.code = field.code
    this.type = field.type
    this.required = field.required
    this.order = field.order
    this.show_in_list = field.show_in_list
  }
}