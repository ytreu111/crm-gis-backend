import { Module } from '@nestjs/common';
import { ElementsController } from './elements.controller';
import { ElementsService } from './elements.service';
import { FieldsService } from '@/modules/fields'

@Module({
  providers: [
    ElementsService,
    FieldsService,
  ],
  controllers: [
    ElementsController,
  ]
})
export class ElementsModule {}
