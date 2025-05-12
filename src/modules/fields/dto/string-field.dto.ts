import { ApiProperty } from '@nestjs/swagger'
import { IsObject, ValidateNested } from 'class-validator'
import { DirectoryFieldType } from '@prisma-client'
import { Type } from 'class-transformer'
import { CreateFieldDto, FieldResponseDto } from './field.dto'
import { OmitType } from '@nestjs/mapped-types'
import { StringFieldConstraintDto } from './constraints/string-field-constraint.dto'


export class CreateStringFieldDto extends CreateFieldDto {
  @ApiProperty({ enum: ['string'] })
  type: typeof DirectoryFieldType.string

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => StringFieldConstraintDto)
  constraint: StringFieldConstraintDto
}

export class UpdateStringFieldDto extends OmitType(CreateStringFieldDto, ['directory_id'] as const) {
}

export class StringFieldResponseDto extends FieldResponseDto {
  @ApiProperty({ enum: ['string'] })
  type: typeof DirectoryFieldType.string

  @ApiProperty()
  constraint: StringFieldConstraintDto

  constructor(field) {
    super(field)

    this.constraint = new StringFieldConstraintDto(field.constraint)
  }
}