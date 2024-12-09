import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
} from "class-validator";
import {} from "class-transformer";

enum DirectoryFieldTypeEnum {
  Integer = "integer",
  Float = "float",
  String = "string",
  Date = "date",
  DateTime = "datetime",
  Time = "time",
}

export class CreateDirectoryFieldDto {
  @ApiProperty()
  @IsString({})
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  code?: string;

  @ApiProperty({
    enum: DirectoryFieldTypeEnum,
    enumName: "DirectoryFieldTypeEnum",
  })
  @IsEnum(DirectoryFieldTypeEnum)
  type: DirectoryFieldTypeEnum;

  @ApiProperty()
  @IsBoolean()
  required: boolean;

  @ApiProperty()
  @IsBoolean()
  multiple: boolean;

  @ApiProperty()
  @IsNumber()
  order: number;

  @ApiProperty()
  @IsBoolean()
  show_in_list: boolean;
}
