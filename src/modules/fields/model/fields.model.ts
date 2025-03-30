import * as client from '@prisma/client'
import { CreateIntegerFieldDto } from '../dto/models/create-integer-field.dto'
import { CreateStringFieldDto } from '../dto/models/create-string-field.dto'

export const FieldTypeEnum = client.$Enums.DirectoryFieldType

export type CreateFieldType = CreateIntegerFieldDto | CreateStringFieldDto