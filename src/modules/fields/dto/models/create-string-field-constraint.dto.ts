import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateStringFieldConstraintDto {
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  min_length?: number

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  max_length?: number

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  default_value?: string
}