import { Injectable } from '@nestjs/common'
import { PrismaClientService } from '@/modules/database'
import { LayerDto } from './dto/layer.dto'

@Injectable()
export class ServerMetricsService {
  constructor(
    private readonly pgPrismaService: PrismaClientService,
  ) {}

  findAll() {
    return this.pgPrismaService.layer.findMany({})
  }

  findById(id: string) {
    return this.pgPrismaService.layer.findFirst({
      where: { id },
    })
  }

  create(layer: LayerDto) {
    return this.pgPrismaService.layer.create({
      data: layer,
    })
  }

  update(id: string, layer: LayerDto) {
    return this.pgPrismaService.layer.update({
      where: { id },
      data: layer,
    })
  }

  delete(id: string) {
    return this.pgPrismaService.layer.delete({
      where: { id },
    })
  }
}
