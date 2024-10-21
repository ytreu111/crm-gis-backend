import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  NotFoundException,
  Put,
  Param,
} from "@nestjs/common";
import { CreateDirectoryDto } from "./dto/create-directory.dto";
import { ApiBody } from "@nestjs/swagger";
import { DirectoriesService } from "./directories.service";
import { FieldsService } from "./fields/fields.service";

@Controller("directories")
export class DirectoriesController {
  constructor(
    private readonly directoriesService: DirectoriesService,
    private readonly directoryFieldsService: FieldsService,
  ) {}

  @Get()
  list() {
    return this.directoriesService.getAll();
  }

  @Get(":id")
  async retrieve(@Param("id") id: string) {
    const directory = await this.directoriesService.findById(id);

    if (!directory) throw new NotFoundException();

    return directory;
  }

  @Get(":directory_id/fields")
  getDirectoryFields(@Param("directory_id") id: string) {
    return this.directoryFieldsService.findByDirectory(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateDirectoryDto })
  create(@Body() createDirectoryDto: CreateDirectoryDto) {
    return this.directoriesService.create(createDirectoryDto);
  }

  @Put(":id")
  @ApiBody({ type: CreateDirectoryDto })
  update(
    @Param("id") id: string,
    @Body() createDirectoryDto: CreateDirectoryDto,
  ) {
    return this.directoriesService.update(id, createDirectoryDto);
  }
}
