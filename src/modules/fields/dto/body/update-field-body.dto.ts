import { CreateFieldDto } from '../models/create-field.dto'
import { IsObject, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateIntegerFieldConstraintDto } from '../models/create-integer-field-constraint.dto'
import { CreateStringFieldConstraintDto } from '../models/create-string-field-constraint.dto'
import { FieldTypeEnum } from '@/modules/fields/model/fields.model'

export class UpdateFieldBodyDto extends CreateFieldDto {
  @IsObject()
  @ValidateNested()
  @Type(({ object }) => {
    switch (object.type) {
      case FieldTypeEnum.string: {
        return CreateStringFieldConstraintDto
      }
      case FieldTypeEnum.integer: {
        return CreateIntegerFieldConstraintDto
      }
      default: {
        return Object
      }
    }
  }, {
    keepDiscriminatorProperty: true,
    discriminator: {
      property: 'type',
      subTypes: [
        { name: FieldTypeEnum.string, value: CreateStringFieldConstraintDto },
        { name: FieldTypeEnum.integer, value: CreateIntegerFieldConstraintDto },
      ],
    },
  })
  constraint: CreateIntegerFieldConstraintDto | CreateStringFieldConstraintDto
}