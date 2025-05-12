import { ApiProperty } from '@nestjs/swagger'
import { IsObject, ValidateNested } from 'class-validator'
import { DirectoryFieldType } from '@prisma-client'
import { Type } from 'class-transformer'
import { CreateFieldDto, FieldResponseDto } from './field.dto'
import { OmitType } from '@nestjs/mapped-types'
import { DatetimeFieldConstraintDto } from './constraints/datetime-field-constraint.dto'

export class CreateDatetimeFieldDto extends CreateFieldDto {
  @ApiProperty({ enum: ['datetime'] })
  type: typeof DirectoryFieldType.datetime

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => DatetimeFieldConstraintDto)
  constraint: DatetimeFieldConstraintDto
}

export class UpdateDatetimeFieldDto extends OmitType(CreateDatetimeFieldDto, ['directory_id'] as const) {
}

export class DatetimeFieldResponseDto extends FieldResponseDto {
  @ApiProperty({ enum: ['datetime'] })
  type: typeof DirectoryFieldType.datetime

  @ApiProperty()
  constraint: DatetimeFieldConstraintDto

  constructor(field) {
    super(field)

    this.constraint = new DatetimeFieldConstraintDto(field.constraint)
  }
}