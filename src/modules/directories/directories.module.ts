import { Module } from '@nestjs/common'
import { PgPrismaService } from '@/modules/database'
import { DirectoriesService } from './directories.service'
import { DirectoriesController } from './directories.controller'
import { FieldsModule } from '@/modules/fields'

@Module({
  controllers: [
    DirectoriesController,
  ],
  providers: [
    DirectoriesService,
    PgPrismaService,
  ],
  imports: [
    FieldsModule,
  ],
})
export class DirectoriesModule {}
