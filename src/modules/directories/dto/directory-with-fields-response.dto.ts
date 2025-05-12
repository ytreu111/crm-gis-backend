import { DirectoryResponseDto } from './directory-response.dto'
import { ApiProperty } from '@nestjs/swagger'
import { FieldResponseType } from '@/modules/fields/model/fields.model'
import { plainFieldToInstance } from '@/modules/fields/lib/plain-field-to-instance'
import { FieldResponseApiExtraModels, FieldResponseSchemaPath } from '@/modules/fields/lib/field-help'

@FieldResponseApiExtraModels()
export class DirectoryWithFieldsResponseDto extends DirectoryResponseDto {
  @ApiProperty({
    isArray: true,
    anyOf: FieldResponseSchemaPath(),
  })
  fields: FieldResponseType[]

  constructor(directory, fields) {
    super(directory)
    this.fields = fields.map(plainFieldToInstance)
  }
}