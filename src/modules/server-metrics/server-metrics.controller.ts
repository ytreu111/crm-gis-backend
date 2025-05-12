import { Controller, Get, Header } from '@nestjs/common'
import { PrismaClientService } from '@/modules/database'

@Controller()
export class ServerMetricsController {
  constructor(
    private readonly pgPrismaService: PrismaClientService,
  ) {}

  @Get()
  @Header('Content-Type', 'text')
  list() {
    return this.pgPrismaService.$metrics.prometheus()
  }
}
