import {
  Body,
  Controller,
  Get,
  Post,
  NotFoundException,
  Put,
  Param, Delete,
} from '@nestjs/common'
import { CreateDirectoryDto } from './dto/create-directory.dto'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { DirectoriesService } from './directories.service'

@ApiTags('Directories')
@Controller()
export class DirectoriesController {
  constructor(
    private readonly directoriesService: DirectoriesService,
  ) {}

  @Get()
  list() {
    return this.directoriesService.findAll()
  }

  @Get(':id')
  async retrieve(@Param('id') id: string) {
    const directory = await this.directoriesService.findById(id)

    if (!directory) throw new NotFoundException()

    return directory
  }

  @Post()
  @ApiBody({ type: CreateDirectoryDto })
  create(
    @Body() createDirectoryDto: CreateDirectoryDto,
  ) {
    return this.directoriesService.create(createDirectoryDto)
  }

  @Put(':id')
  @ApiBody({ type: CreateDirectoryDto })
  async update(
    @Param('id') id: string,
    @Body() body: CreateDirectoryDto,
  ) {
    const directory = await this.directoriesService.update(id, body)

    if (!directory) throw new NotFoundException()

    return directory
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    await this.directoriesService.delete(id)
  }
}
