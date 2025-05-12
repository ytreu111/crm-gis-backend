import {
  Body,
  Controller,
  Get,
  Post,
  NotFoundException,
  Put,
  Param,
  Delete,
} from '@nestjs/common'
import { ApiBody, ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger'
import { DirectoriesService } from './directories.service'
import { CreateDirectoryDto, DirectoryResponseDto, DirectoryWithFieldsResponseDto } from './dto'

@ApiTags('Directories')
@Controller()
export class DirectoriesController {
  constructor(
    private readonly directoriesService: DirectoriesService,
  ) {}

  @Get()
  @ApiOkResponse({ type: [DirectoryResponseDto] })
  async list() {
    const directories = await this.directoriesService.findAll()
    return directories.map((el) => new DirectoryResponseDto(el))
  }

  @Get(':id')
  @ApiOkResponse({ type: DirectoryResponseDto })
  async retrieve(@Param('id') id: string) {
    const directory = await this.directoriesService.findById(id)

    if (!directory) throw new NotFoundException()

    return new DirectoryResponseDto(directory)
  }

  @Post()
  @ApiCreatedResponse({ type: DirectoryWithFieldsResponseDto })
  @ApiBody({ type: CreateDirectoryDto })
  async create(
    @Body() createDirectoryDto: CreateDirectoryDto,
  ) {
    const directory = await this.directoriesService.create(createDirectoryDto)

    return new DirectoryWithFieldsResponseDto(directory, directory.fields)
  }

  @Put(':id')
  @ApiOkResponse({ type: DirectoryWithFieldsResponseDto })
  @ApiBody({ type: CreateDirectoryDto })
  async update(
    @Param('id') id: string,
    @Body() body: CreateDirectoryDto,
  ) {
    const directory = await this.directoriesService.update(id, body)

    if (!directory) throw new NotFoundException()

    return new DirectoryWithFieldsResponseDto(directory, directory.fields)
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    await this.directoriesService.delete(id)
  }
}
