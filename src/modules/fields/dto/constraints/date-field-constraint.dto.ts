import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class DateFieldConstraintDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  min_value?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  max_value?: string

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  default_value?: string

  constructor(constraint) {
    this.min_value = constraint?.date_constraint.min_value
    this.max_value = constraint?.date_constraint.max_value
    this.default_value = constraint?.date_constraint.default_value
  }
}