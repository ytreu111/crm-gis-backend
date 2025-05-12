import { ApiProperty } from '@nestjs/swagger'
import { IsObject, ValidateNested } from 'class-validator'
import { DirectoryFieldType } from '@prisma-client'
import { Type } from 'class-transformer'
import { CreateFieldDto, FieldResponseDto } from './field.dto'
import { OmitType } from '@nestjs/mapped-types'
import { IntegerFieldConstraintDto } from './constraints/integer-field-constraint.dto'

export class CreateIntegerFieldDto extends CreateFieldDto {
  @ApiProperty({ enum: ['integer'] })
  type: typeof DirectoryFieldType.integer

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => IntegerFieldConstraintDto)
  constraint: IntegerFieldConstraintDto
}

export class UpdateIntegerFieldDto extends OmitType(CreateIntegerFieldDto, ['directory_id'] as const) {
}

export class IntegerFieldResponseDto extends FieldResponseDto {
  @ApiProperty({ enum: ['integer'] })
  type: typeof DirectoryFieldType.integer

  @ApiProperty()
  @Type(() => IntegerFieldConstraintDto)
  constraint: IntegerFieldConstraintDto

  constructor(field) {
    super(field)

    this.constraint = new IntegerFieldConstraintDto(field.constraint)
  }
}