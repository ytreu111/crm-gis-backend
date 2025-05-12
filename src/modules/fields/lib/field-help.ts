import type { Class } from 'utility-types'
import { DirectoryFieldType } from '@prisma-client'
import { StringFieldResponseDto } from '@/modules/fields/dto/string-field.dto'
import { IntegerFieldResponseDto } from '@/modules/fields/dto/integer-field.dto'
import { DateFieldResponseDto } from '@/modules/fields/dto/date-field.dto'
import { DatetimeFieldResponseDto } from '@/modules/fields/dto/datetime-field.dto'
import { TimeFieldResponseDto } from '@/modules/fields/dto/time-field.dto'
import { ApiExtraModels, getSchemaPath } from '@nestjs/swagger'
import { FieldResponseDto } from '@/modules/fields/dto/field.dto'

export const FieldResponseByType: Record<DirectoryFieldType, Class<FieldResponseDto>> = {
  [DirectoryFieldType.string]: StringFieldResponseDto,
  [DirectoryFieldType.integer]: IntegerFieldResponseDto,
  [DirectoryFieldType.date]: DateFieldResponseDto,
  [DirectoryFieldType.datetime]: DatetimeFieldResponseDto,
  [DirectoryFieldType.time]: TimeFieldResponseDto,
}

export function FieldResponseApiExtraModels() {
  return ApiExtraModels(...Object.values(FieldResponseByType))
}

export function FieldResponseSchemaPath() {
  return Object.values(FieldResponseByType).map((el) => (
    { $ref: getSchemaPath(el) }
  ))
}