import { IsObject, IsString, ValidateNested } from 'class-validator'
import { IsDirectoryField } from '../../decorators/IsDirectoryField'
import { CreateFieldType } from '../../model/fields.model'

export class CreateFieldBodyDto {
  @IsString()
  directory_id: string

  @IsObject()
  @ValidateNested()
  @IsDirectoryField()
  field: CreateFieldType
}