import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '@/modules/database'
import { FieldsService } from '@/modules/fields'
import { CreateElementDto, ElementDto, ElementMapper } from './dto'
import { createZodSchema } from '@/modules/fields/lib'

@Injectable()
export class ElementsService {
  constructor(
    public prismaService: PrismaService,
    private fieldsService: FieldsService,
  ) {}

  async findAll({ directoryId }: { directoryId: string }) {
    const elements = await this.prismaService.elements.findMany({
      where: { directory_id: directoryId },
    })

    return elements.map(ElementMapper.toDto)
  }

  async findById(id: string) {
    const element = await this.prismaService.elements.findFirst({
      where: { id },
    })

    if (!element) throw new NotFoundException()

    return ElementMapper.toDto(element)
  }

  async create(elementDto: CreateElementDto) {
    const { directory_id, ...elementData } = elementDto
    const directoryFields = await this.fieldsService.findAll({ directoryId: directory_id })
    const zodSchema = createZodSchema(directoryFields)
    const parsedElementData = zodSchema.parse(elementData)

    try {
      const createdElement = await this.prismaService.elements.create({
        data: {
          directory_id,
          data: parsedElementData,
        },
      })

      return ElementMapper.toDto(createdElement)
    } catch (e) {
      if (e.code === 'P2003') {
        throw new BadRequestException('Справочник с таким id отсутствует')
      }

      throw e
    }
  }

  async update(id: string, body: ElementDto) {
    const { id: elementId, directory_id, ...elementData } = body
    const directoryFields = await this.fieldsService.findAll({ directoryId: directory_id })
    const zodSchema = createZodSchema(directoryFields)
    const parsedElementData = zodSchema.parse(elementData)

    try {
      const updatedElement = await this.prismaService.elements.update({
        where: { id },
        data: {
          data: parsedElementData,
        },
      })

      return ElementMapper.toDto(updatedElement)
    } catch (e) {
      if (e.code === 'P2005') {
        throw new BadRequestException('Элемент с таким id отсутствует')
      }

      throw e
    }
  }

  delete(id: string) {
    return this.prismaService.elements.delete({ where: { id } })
  }
}
