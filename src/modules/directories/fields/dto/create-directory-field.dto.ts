import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNumber, IsString } from "class-validator";

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
  @IsString()
  name: string;

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
