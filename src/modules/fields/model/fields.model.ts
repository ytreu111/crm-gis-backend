import { CreateStringFieldDto, StringFieldResponseDto } from '../dto/string-field.dto'
import { CreateIntegerFieldDto, IntegerFieldResponseDto } from '../dto/integer-field.dto'
import { CreateDateFieldDto, DateFieldResponseDto } from '../dto/date-field.dto'
import { CreateDatetimeFieldDto, DatetimeFieldResponseDto } from '../dto/datetime-field.dto'
import { CreateTimeFieldDto, TimeFieldResponseDto } from '../dto/time-field.dto'
import { FieldResponseByType } from '../lib/field-help'
import { $Values } from 'utility-types'

export type CreateFieldType =
  CreateIntegerFieldDto
  | CreateStringFieldDto
  | CreateDateFieldDto
  | CreateDatetimeFieldDto
  | CreateTimeFieldDto

export type FieldResponseType =
  StringFieldResponseDto
  | IntegerFieldResponseDto
  | DateFieldResponseDto
  | DatetimeFieldResponseDto
  | TimeFieldResponseDto
