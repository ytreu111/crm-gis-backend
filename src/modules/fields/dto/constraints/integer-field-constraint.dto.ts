import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumber, IsOptional } from 'class-validator'

export class IntegerFieldConstraintDto {
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

  constructor(constraint) {
    this.min_value = constraint?.integer_constraint.min_value
    this.max_value = constraint?.integer_constraint.max_value
    this.default_value = constraint?.integer_constraint.default_value
  }
}