import { Module } from '@nestjs/common'
import { DirectoriesService } from './directories.service'
import { DirectoriesController } from './directories.controller'
import { FieldsModule } from '@/modules/fields'

@Module({
  controllers: [
    DirectoriesController,
  ],
  providers: [
    DirectoriesService,
  ],
  imports: [
    FieldsModule,
  ],
})
export class DirectoriesModule {}
