import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CreateDirectoryFieldDto } from '../fields/dto/create-directory-field.dto'
import { Type } from 'class-transformer'

export class CreateDirectoryDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: () => [CreateDirectoryFieldDto] })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateDirectoryFieldDto)
  fields: CreateDirectoryFieldDto[];
}
