import { Module } from '@nestjs/common'
import { LayersService } from './layers.service'
import { LayersController } from './layers.controller'
import { PrismaClientService } from '@/modules/database'

@Module({
  providers: [
    PrismaClientService,
    LayersService,
  ],
  controllers: [
    LayersController,
  ],
})
export class LayersModule {}
