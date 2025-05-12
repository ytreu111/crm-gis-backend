import { Module } from '@nestjs/common'
import { ServerMetricsController } from './server-metrics.controller'
import { PrismaClientService } from '@/modules/database'

@Module({
  providers: [
    PrismaClientService,
  ],
  controllers: [
    ServerMetricsController,
  ],
})
export class ServerMetricsModule {}
