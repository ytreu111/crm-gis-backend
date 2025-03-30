import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common'
import { ApiQuery, ApiBody, ApiExtraModels, getSchemaPath } from '@nestjs/swagger'
import { FieldsService } from './fields.service'
import { CreateFieldBodyDto } from './dto/body/create-field-body.dto'
import { CreateStringFieldDto } from './dto/models/create-string-field.dto'
import { CreateIntegerFieldDto } from './dto/models/create-integer-field.dto'
import { UpdateFieldBodyDto } from '@/modules/fields/dto/body/update-field-body.dto'

@Controller()
export class FieldsController {
  constructor(
    private fieldsService: FieldsService,
  ) {}

  @Get()
  @ApiQuery({ name: 'directory_id', required: false })
  list(
    @Query('directory_id') directoryId?: string,
  ) {
    return this.fieldsService.findAll({ directoryId })
  }

  @Get(':id')
  async retrieve(
    @Param('id') id: string,
  ) {
    const field = await this.fieldsService.findById(id)

    if (!field) throw new NotFoundException()

    return field
  }

  @Post()
  @ApiExtraModels(CreateStringFieldDto, CreateIntegerFieldDto)
  @ApiBody({
    schema: {
      properties: {
        directory_id: { type: 'string' },
        field: {
          anyOf: [
            { $ref: getSchemaPath(CreateIntegerFieldDto) },
            { $ref: getSchemaPath(CreateStringFieldDto) },
          ],
        },
      },
    },
  })
  create(
    @Body() body: CreateFieldBodyDto,
  ) {
    return this.fieldsService.create(body.directory_id, body.field)
  }

  @Put(':id')
  @ApiExtraModels(CreateStringFieldDto, CreateIntegerFieldDto)
  @ApiBody({
    schema: {
      anyOf: [
        { $ref: getSchemaPath(CreateIntegerFieldDto) },
        { $ref: getSchemaPath(CreateStringFieldDto) },
      ],
    },
  })
  async update(
    @Param('id') id: string,
    @Body() body: UpdateFieldBodyDto,
  ) {
    const field = await this.fieldsService.update(id, body)

    if (!field) throw new NotFoundException()

    return field
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    this.fieldsService.delete(id)
  }
}