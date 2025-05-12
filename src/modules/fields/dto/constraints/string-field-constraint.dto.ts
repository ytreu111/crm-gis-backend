import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class StringFieldConstraintDto {
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

  constructor(constraint) {
    this.min_length = constraint?.string_constraint.min_length
    this.max_length = constraint?.string_constraint.max_length
    this.default_value = constraint?.string_constraint.default_value
  }
}
