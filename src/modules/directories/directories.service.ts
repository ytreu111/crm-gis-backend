import { Injectable } from '@nestjs/common'
import { CreateDirectoryDto } from './dto'
import { FieldsService } from '@/modules/fields'
import { PrismaService } from '@/modules/database/prisma.service'

@Injectable()
export class DirectoriesService {
  constructor(
    private readonly fieldsService: FieldsService,
    private readonly prismaService: PrismaService,
  ) {}

  findAll() {
    return this.prismaService.directory.findMany()
  }

  findById(id: string) {
    return this.prismaService.directory.findFirst({ where: { id } })
  }

  async create(directoryDto: CreateDirectoryDto) {
    const { fields, ...directoryFields } = directoryDto

    return this.prismaService.$transaction(async (tx) => {
      const fieldServicePrismaService = this.fieldsService.prismaService

      try {
        const directory = await tx.directory.create({
          data: directoryFields,
        })

        // @ts-expect-error надо так для транзакции
        this.fieldsService.prismaService = tx
        const _fields = await this.fieldsService.createMany(directory.id, fields)

        return {
          ...directory,
          fields: _fields,
        }
      } catch (e) {
        throw e
      } finally {
        this.fieldsService.prismaService = fieldServicePrismaService
      }
    })
  }

  update(id: string, directoryDto: CreateDirectoryDto) {
    const { fields, ...directoryFields } = directoryDto
    const fieldServicePrismaService = this.fieldsService.prismaService

    return this.prismaService.$transaction(async (tx) => {
      try {
        // @ts-expect-error надо так для транзакции
        this.fieldsService.prismaService = tx

        const directory = await tx.directory.update({
          where: { id: id },
          data: directoryFields,
        })

        const _fields = await this.fieldsService.updateDirectoryFields(id, fields)

        return {
          ...directory,
          fields: _fields,
        }
      } catch (e) {
        throw e
      } finally {
        this.fieldsService.prismaService = fieldServicePrismaService
      }
    })
  }

  delete(id: string) {
    return this.prismaService.directory.delete({ where: { id } })
  }
}
