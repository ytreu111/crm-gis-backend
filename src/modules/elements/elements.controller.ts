import { Body, Controller, Delete, Get, Post, Put, Param } from '@nestjs/common'
import { NotImplementedErrorDecorator } from '@/common/decorators'
import { ApiCreatedResponse, ApiQuery, ApiResponse, ApiOkResponse } from '@nestjs/swagger'
import { ElementsService } from './elements.service'
import { CreateElementDto, ElementDto } from './dto'
import { QueryRequiredDecorator } from '@/decorators'

@Controller('elements')
export class ElementsController {
  constructor(
    private readonly elementsService: ElementsService,
  ) {}

  @Get()
  @ApiOkResponse({
    schema: {
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          directory_id: { type: 'string' },
        },
        additionalProperties: {},
      },
    },
  })
  @ApiQuery({ name: 'directory_id', required: true })
  list(@QueryRequiredDecorator('directory_id') directoryId: string) {
    return this.elementsService.findAll({ directoryId })
  }

  @Get(':id')
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        directory_id: { type: 'string' },
      },
      additionalProperties: {},
    },
  })
  retrieve(@Param('id') id: string) {
    return this.elementsService.findById(id)
  }

  @Post()
  @ApiCreatedResponse({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        directory_id: { type: 'string' },
      },
      additionalProperties: {},
    },
  })
  create(@Body() body: CreateElementDto) {
    return this.elementsService.create(body)
  }

  @Put(':id')
  @ApiOkResponse({
    schema: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        directory_id: { type: 'string' },
      },
      additionalProperties: {},
    },
  })
  update(@Param('id') id: string, @Body() body) {
    return this.elementsService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.elementsService.delete(id)
  }
}
