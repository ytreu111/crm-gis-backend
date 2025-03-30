import { IsBoolean, IsOptional, IsString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class LayerDto {
  @ApiProperty()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  active?: boolean

  @ApiProperty()
  @IsString()
  directory_id: string

  @ApiProperty()
  @IsString()
  field_id: string
}