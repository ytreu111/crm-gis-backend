import { Type } from 'class-transformer'
import { FieldTypeEnum } from '../model/fields.model'
import { CreateFieldDto } from '../dto/models/create-field.dto'
import { CreateStringFieldDto } from '../dto/models/create-string-field.dto'
import { CreateIntegerFieldDto } from '../dto/models/create-integer-field.dto'

export function IsDirectoryField() {
  return Type(() => CreateFieldDto,
    {
      keepDiscriminatorProperty: true,
      discriminator: {
        property: 'type',
        subTypes: [
          { value: CreateIntegerFieldDto, name: FieldTypeEnum.integer },
          { value: CreateStringFieldDto, name: FieldTypeEnum.string },
        ],
      },
    },
  )
}