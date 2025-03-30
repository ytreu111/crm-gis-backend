import { CreateFieldDto } from './create-field.dto'
import { ApiProperty } from '@nestjs/swagger'
import { FieldTypeEnum } from '../../model/fields.model'
import { IsObject, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateIntegerFieldConstraintDto } from './create-integer-field-constraint.dto'

export class CreateIntegerFieldDto extends CreateFieldDto {
  @ApiProperty({ enum: ['integer'] })
  type: typeof FieldTypeEnum['integer']

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateIntegerFieldConstraintDto)
  constraint: CreateIntegerFieldConstraintDto
}