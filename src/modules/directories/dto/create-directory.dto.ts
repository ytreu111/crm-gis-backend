import { ApiExtraModels, ApiProperty, ApiPropertyOptional, getSchemaPath } from '@nestjs/swagger'
import { IsArray, IsOptional, IsString, ValidateNested, ArrayNotEmpty } from 'class-validator'
import { CreateIntegerFieldDto } from '@/modules/fields/dto/integer-field.dto'
import { CreateStringFieldDto } from '@/modules/fields/dto/string-field.dto'
import { CreateDateFieldDto } from '@/modules/fields/dto/date-field.dto'
import { CreateDatetimeFieldDto } from '@/modules/fields/dto/datetime-field.dto'
import { CreateTimeFieldDto } from '@/modules/fields/dto/time-field.dto'
import { CreateFieldType } from '@/modules/fields/model/fields.model'
import { IsDirectoryField } from '../decorators/IsDirectoryField'


@ApiExtraModels(
  CreateStringFieldDto,
  CreateIntegerFieldDto,
  CreateDateFieldDto,
  CreateDatetimeFieldDto,
  CreateTimeFieldDto,
)
export class CreateDirectoryDto {
  @ApiProperty()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiProperty({
    isArray: true,
    anyOf: [
      { $ref: getSchemaPath(CreateIntegerFieldDto) },
      { $ref: getSchemaPath(CreateStringFieldDto) },
      { $ref: getSchemaPath(CreateDateFieldDto) },
      { $ref: getSchemaPath(CreateDatetimeFieldDto) },
      { $ref: getSchemaPath(CreateTimeFieldDto) },
    ],
  })
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  @IsDirectoryField()
  fields: CreateFieldType[]
}
