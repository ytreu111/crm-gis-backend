import {
  Controller,
  Get,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { FieldsService } from "./fields.service";
import { QueryRequired } from "../../../decorators/QueryRequired";

@Controller("directories/:id/fields")
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {}

  // @Get()
  // @ApiQuery({ name: "directory", required: true })
  // list(@QueryRequired("directory") directory: string) {
  //   console.log(123);
  //   console.log(directory);
  //   return [];
  // }
}
