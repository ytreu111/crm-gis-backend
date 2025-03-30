import { CreateFieldDto } from './create-field.dto'
import { ApiProperty } from '@nestjs/swagger'
import { CreateStringFieldConstraintDto } from './create-string-field-constraint.dto'
import { FieldTypeEnum } from '../../model/fields.model'
import { Type } from 'class-transformer'
import { IsObject, ValidateNested } from 'class-validator'

export class CreateStringFieldDto extends CreateFieldDto {
  @ApiProperty({ enum: ['string'] })
  type: typeof FieldTypeEnum['string']

  @ApiProperty()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateStringFieldConstraintDto)
  constraint: CreateStringFieldConstraintDto
}