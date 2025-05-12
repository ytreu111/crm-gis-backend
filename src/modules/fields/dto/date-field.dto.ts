import { ApiProperty } from '@nestjs/swagger'
import { IsObject, ValidateNested } from 'class-validator'
import { DirectoryFieldType } from '@prisma-client'
import { Type } from 'class-transformer'
import { CreateFieldDto, FieldResponseDto } from './field.dto'
import { OmitType } from '@nestjs/mapped-types'
import { DateFieldConstraintDto } from './constraints/date-field-constraint.dto'

export class CreateDateFieldDto extends CreateFieldDto {
  @ApiProperty({ enum: ['date'] })
  type: typeof DirectoryFieldType.date

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => DateFieldConstraintDto)
  constraint: DateFieldConstraintDto
}

export class UpdateDateFieldDto extends OmitType(CreateDateFieldDto, ['directory_id'] as const) {
}

export class DateFieldResponseDto extends FieldResponseDto {
  @ApiProperty({ enum: ['date'] })
  type: typeof DirectoryFieldType.date

  @ApiProperty()
  constraint: DateFieldConstraintDto

  constructor(field) {
    super(field)

    this.constraint = new DateFieldConstraintDto(field.constraint)
  }
}