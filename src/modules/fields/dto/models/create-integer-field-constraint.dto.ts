import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumber, IsOptional } from 'class-validator'

export class CreateIntegerFieldConstraintDto {
  @ApiPropertyOptional({ required: false })
  @IsNumber()
  @IsOptional()
  min_value?: number

  @ApiPropertyOptional({ required: false })
  @IsNumber()
  @IsOptional()
  max_value?: number

  @ApiPropertyOptional({ required: false })
  @IsNumber()
  @IsOptional()
  default_value?: number
}