import { Controller, Delete, Get, Post, Put, Param, NotFoundException, Body } from '@nestjs/common'
import { LayersService } from './layers.service'
import { LayerDto } from './dto/layer.dto'

@Controller()
export class LayersController {
  constructor(
    private readonly layersService: LayersService,
  ) {}

  @Get()
  list() {
    return this.layersService.findAll()
  }

  @Get(':id')
  async retrieve(
    @Param('id') layerId: string,
  ) {
    const layer = await this.layersService.findById(layerId)

    if (!layer) throw new NotFoundException()

    return layer
  }

  @Post()
  create(
    @Body() body: LayerDto,
  ) {
    return this.layersService.create(body)
  }

  @Put(':id')
  async update(
    @Param('id') layerId: string,
    @Body() body: LayerDto,
  ) {
    const layer = await this.layersService.update(layerId, body)

    if (!layer) throw new NotFoundException()

    return layer
  }

  @Delete(':id')
  delete(
    @Param('id') layerId: string,
  ) {
    return this.layersService.delete(layerId)
  }
}
