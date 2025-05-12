import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class DatetimeFieldConstraintDto {
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
    this.min_value = constraint?.datetime_constraint.min_value
    this.max_value = constraint?.datetime_constraint.max_value
    this.default_value = constraint?.datetime_constraint.default_value
  }
}