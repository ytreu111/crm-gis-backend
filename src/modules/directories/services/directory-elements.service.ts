import { Injectable } from '@nestjs/common'
import { PgPrismaService } from '@services'

@Injectable()
export class DirectoryElementsService {
  constructor(
    private readonly pgPrismaService: PgPrismaService,
  ) {}

  findById(id: string) {
    return this.pgPrismaService.elements.findFirst({ where: { id } })
  }

  findByDirectory(directoryId: string) {
    return this.pgPrismaService.elements.findMany({
      where: { directory_id: directoryId },
    })
  }

  async getElementDirectory(id: string) {
    const data = await this.pgPrismaService.elements.findFirst({ where: { id }, select: { directory_id: true } })
    return data?.directory_id
  }

  create(directoryId: string, data: Record<string, any>) {
    return this.pgPrismaService.elements.create({ data: { directory_id: directoryId, data: data } })
  }

  update(elementId: string, data: Record<string, any>) {
    return this.pgPrismaService.elements.update({ where: { id: elementId }, data: { data } })
  }

  delete(elementId: string) {
    return this.pgPrismaService.elements.delete({ where: { id: elementId } })
  }
}
