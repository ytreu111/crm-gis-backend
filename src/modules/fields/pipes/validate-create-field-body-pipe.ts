import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'
import { DirectoryFieldType } from '@prisma-client'
import { CreateStringFieldDto } from '../dto/string-field.dto'
import { CreateIntegerFieldDto } from '../dto/integer-field.dto'
import { CreateDateFieldDto } from '../dto/date-field.dto'
import { CreateDatetimeFieldDto } from '../dto/datetime-field.dto'
import { CreateTimeFieldDto } from '../dto/time-field.dto'
import { CreateFieldDto } from '../dto/field.dto'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

const FieldTypeDtoMap = {
  [DirectoryFieldType.string]: CreateStringFieldDto,
  [DirectoryFieldType.integer]: CreateIntegerFieldDto,
  [DirectoryFieldType.date]: CreateDateFieldDto,
  [DirectoryFieldType.datetime]: CreateDatetimeFieldDto,
  [DirectoryFieldType.time]: CreateTimeFieldDto,
} as const

@Injectable()
export class ValidateCreateFieldBodyPipe implements PipeTransform<CreateFieldDto> {
  async transform(value: CreateFieldDto) {
    const DtoClass = FieldTypeDtoMap[value.type as DirectoryFieldType]

    if (!DtoClass) {
      throw new BadRequestException()
    }

    const dto = plainToInstance(DtoClass, value) as typeof FieldTypeDtoMap[keyof typeof FieldTypeDtoMap]
    const errors = await validate(dto, { whitelist: true, forbidNonWhitelisted: true })

    if (errors.length > 0) {
      throw new BadRequestException(errors)
    }

    return dto
  }
}