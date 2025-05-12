import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common'
import { ApiQuery, ApiTags } from '@nestjs/swagger'
import { z, ZodType } from 'zod'
import { QueryRequiredDecorator } from '../../../decorators/query-required.decorator'
import { DirectoryElementsService } from '../services/directory-elements.service'
import { DirectoryFieldsService } from '../services/directory-fields.service'

@ApiTags('Directories')
@Controller()
export class DirectoryElementsController {
  constructor(
    private readonly elementsService: DirectoryElementsService,
    private readonly fieldService: DirectoryFieldsService,
  ) {}

  @Get('elements/:id')
  async retrieve(
    @Param('id') elementId: string,
  ) {
    const element = await this.elementsService.findById(elementId)

    if (!element) throw new NotFoundException()

    const { id, data } = element

    return { id, ...data }
  }

  @Put('elements/:id')
  async update(
    @Param('id') elementId: string,
    @Body() body,
  ) {
    const elementDirectory = await this.elementsService.getElementDirectory(elementId)

    if (!elementDirectory) throw new NotFoundException()

    const fields = await this.fieldService.findByDirectory(elementDirectory)

    const schema = z.object(Object.fromEntries(
      fields.map((field) => {
        let fieldSchema: ZodType

        switch (field.type) {
          case 'string': {
            fieldSchema = z.string()
            break
          }
          case 'integer': {
            fieldSchema = z.number()
            break
          }
          case 'float': {
            fieldSchema = z.number()
            break
          }
          case 'date': {
            fieldSchema = z.string().date()
            break
          }
          case 'datetime': {
            fieldSchema = z.string().datetime()
            break
          }
          case 'time': {
            fieldSchema = z.string().time()
            break
          }
        }

        if (field.multiple) {
          fieldSchema = fieldSchema.array()
        }

        if (!field.required) {
          fieldSchema = fieldSchema.optional()
        }

        return [field.code, fieldSchema]
      }),
    ))

    const result = schema.safeParse(body)

    if (result.error?.issues.length) throw new BadRequestException()

    const { data, id } = await this.elementsService.update(elementId, body)

    return { id, ...data }
  }

  @Delete('elements/:id')
  async delete(
    @Param('id') id: string,
  ) {
    await this.elementsService.delete(id)
  }

  @Get(':id/elements')
  @ApiQuery({ type: 'string', name: 'directory_id' })
  async list(
    @Param('id') directory: string,
  ) {
    const elements = await this.elementsService.findByDirectory(directory)

    return elements.map(({ data, ...el }) => ({ ...el, ...data }))
  }

  @Post(':id/elements')
  async create(
    @Param('id') directoryId: string,
    @Body() body,
  ) {
    const fields = await this.fieldService.findByDirectory(directoryId)

    const schema = z.object(Object.fromEntries(
      fields.map((field) => {
        let fieldSchema: ZodType

        switch (field.type) {
          case 'string': {
            fieldSchema = z.string()
            break
          }
          case 'integer': {
            fieldSchema = z.number()
            break
          }
          case 'float': {
            fieldSchema = z.number()
            break
          }
          case 'date': {
            fieldSchema = z.string().date()
            break
          }
          case 'datetime': {
            fieldSchema = z.string().datetime()
            break
          }
          case 'time': {
            fieldSchema = z.string().time()
            break
          }
        }

        if (field.multiple) {
          fieldSchema = fieldSchema.array()
        }

        if (!field.required) {
          fieldSchema = fieldSchema.optional()
        }

        return [field.code, fieldSchema]
      }),
    ))

    const result = schema.safeParse(body)

    if (result.error?.issues.length) throw new BadRequestException()
    const { data, id } = await this.elementsService.create(directoryId, body)

    return { id, ...data as Record<any, any> }
  }
}
