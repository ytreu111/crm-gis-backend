import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { FieldTypeEnum } from '../../model/fields.model'

export class CreateFieldDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string

  @IsEnum(FieldTypeEnum)
  type: (typeof FieldTypeEnum)[keyof typeof FieldTypeEnum]

  @ApiPropertyOptional({ default: false })
  @IsBoolean()
  @IsOptional()
  required?: boolean

  // @ApiPropertyOptional({ default: false })
  // @IsBoolean()
  // @IsOptional()
  // multiple?: boolean

  @ApiProperty()
  @IsNumber()
  order: number

  @ApiPropertyOptional({ default: true })
  @IsBoolean()
  @IsOptional()
  show_in_list?: boolean
}