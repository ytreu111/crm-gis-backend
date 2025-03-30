import { ApiExtraModels, ApiProperty, ApiPropertyOptional, getSchemaPath } from '@nestjs/swagger'
import { IsArray, IsOptional, IsString, ValidateNested, ArrayNotEmpty } from 'class-validator'
import { CreateIntegerFieldDto } from '@/modules/fields/dto/models/create-integer-field.dto'
import { CreateStringFieldDto } from '@/modules/fields/dto/models/create-string-field.dto'
import { IsDirectoryField } from '@/modules/fields/decorators/IsDirectoryField'


@ApiExtraModels(CreateStringFieldDto, CreateIntegerFieldDto)
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
    ],
  })
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayNotEmpty()
  @IsDirectoryField()
  fields: (CreateIntegerFieldDto | CreateStringFieldDto)[]
}
