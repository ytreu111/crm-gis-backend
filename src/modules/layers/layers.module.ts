import { Module } from '@nestjs/common'
import { LayersService } from './layers.service'
import { LayersController } from './layers.controller'
import { PgPrismaService } from '@/modules/database'

@Module({
  providers: [
    PgPrismaService,
    LayersService,
  ],
  controllers: [
    LayersController,
  ],
})
export class LayersModule {}
