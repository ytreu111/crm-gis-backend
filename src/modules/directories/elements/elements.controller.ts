import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ElementsService } from "./elements.service";

@Controller("/directories/:directory_id/elements")
export class ElementsController {
  constructor(private readonly elementsService: ElementsService) {}

  @Get()
  list(@Param("directory_id") directoryId: string) {
    return this.elementsService.list(directoryId);
  }

  @Get(":id")
  retrieve(
    @Param("directory_id") directoryId: string,
    @Param("id") id: string,
  ) {
    console.log(directoryId);
    console.log(id);
  }

  @Post()
  create(@Param("directory_id") directoryId: string, @Body() body: any) {
    return this.elementsService.create(directoryId, body);
  }

  @Put(":id")
  update() {}
}
