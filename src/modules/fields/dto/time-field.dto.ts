import { ApiProperty } from '@nestjs/swagger'
import { IsObject, ValidateNested } from 'class-validator'
import { DirectoryFieldType } from '@prisma-client'
import { Type } from 'class-transformer'
import { CreateFieldDto, FieldResponseDto } from './field.dto'
import { OmitType } from '@nestjs/mapped-types'
import { TimeFieldConstraintDto } from './constraints/time-field-constraint.dto'


export class CreateTimeFieldDto extends CreateFieldDto {
  @ApiProperty({ enum: ['time'] })
  type: typeof DirectoryFieldType.time

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => TimeFieldConstraintDto)
  constraint: TimeFieldConstraintDto
}

export class UpdateTimeFieldDto extends OmitType(CreateTimeFieldDto, ['directory_id'] as const) {
}

export class TimeFieldResponseDto extends FieldResponseDto {
  @ApiProperty({ enum: ['time'] })
  type: typeof DirectoryFieldType.time

  @ApiProperty()
  constraint: TimeFieldConstraintDto

  constructor(field) {
    super(field)

    this.constraint = new TimeFieldConstraintDto(field.constraint)
  }
}