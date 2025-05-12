import { Type } from 'class-transformer'
import { CreateIntegerFieldDto } from '@/modules/fields/dto/integer-field.dto'
import { CreateStringFieldDto } from '@/modules/fields/dto/string-field.dto'
import { CreateDateFieldDto } from '@/modules/fields/dto/date-field.dto'
import { CreateDatetimeFieldDto } from '@/modules/fields/dto/datetime-field.dto'
import { CreateTimeFieldDto } from '@/modules/fields/dto/time-field.dto'
import { CreateFieldDto } from '@/modules/fields/dto/field.dto'
import { DirectoryFieldType } from '@prisma-client'

export function IsDirectoryField() {
  return Type(() => CreateFieldDto,
    {
      keepDiscriminatorProperty: true,
      discriminator: {
        property: 'type',
        subTypes: [
          { value: CreateIntegerFieldDto, name: DirectoryFieldType.integer },
          { value: CreateStringFieldDto, name: DirectoryFieldType.string },
          { value: CreateDateFieldDto, name: DirectoryFieldType.date },
          { value: CreateDatetimeFieldDto, name: DirectoryFieldType.datetime },
          { value: CreateTimeFieldDto, name: DirectoryFieldType.time },
        ],
      },
    },
  )
}