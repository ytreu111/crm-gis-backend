import { Module } from '@nestjs/common'
import { FieldsController } from './fields.controller';
import { FieldsService } from './fields.service';

@Module({
  providers: [
    FieldsService,
  ],
  controllers: [
    FieldsController,
  ],
  exports: [
    FieldsService,
  ],
})
export class FieldsModule {}