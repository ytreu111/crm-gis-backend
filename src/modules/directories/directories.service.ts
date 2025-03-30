import { Injectable } from '@nestjs/common'
import { CreateDirectoryDto } from './dto/create-directory.dto'
import { PgPrismaService } from '@/modules/database'
import { FieldsService } from '@/modules/fields'


@Injectable()
export class DirectoriesService {
  constructor(
    private readonly pgPrismaService: PgPrismaService,
    private readonly fieldsService: FieldsService,
  ) {}

  async findAll() {
    return this.pgPrismaService.directory.findMany()
  }

  async findById(id: string) {
    return this.pgPrismaService.directory.findFirst({ where: { id } })
  }

  async create(directoryDto: CreateDirectoryDto) {
    const { fields, ...directoryFields } = directoryDto

    return this.pgPrismaService.$transaction(async (tx) => {
      const fieldServicePrismaService = this.fieldsService.pgPrismaService

      try {
        const directory = await tx.directory.create({
          data: directoryFields,
        })

        // @ts-expect-error надо так для транзакции
        this.fieldsService.pgPrismaService = tx
        const _fields = await this.fieldsService.createMany(directory.id, fields)

        return {
          ...directory,
          fields: _fields,
        }
      } catch (e) {
        throw e
      } finally {
        this.fieldsService.pgPrismaService = fieldServicePrismaService
      }
    })
  }

  update(id: string, directoryDto: CreateDirectoryDto) {
    const { fields, ...directoryFields } = directoryDto
    const fieldServicePrismaService = this.fieldsService.pgPrismaService

    return this.pgPrismaService.$transaction(async (tx) => {
      try {
        // @ts-expect-error надо так для транзакции
        this.fieldsService.pgPrismaService = tx

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
        this.fieldsService.pgPrismaService = fieldServicePrismaService
      }
    })
  }

  delete(id: string) {
    return this.pgPrismaService.directory.delete({ where: { id } })
  }
}
