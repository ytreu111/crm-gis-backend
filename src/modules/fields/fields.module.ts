import { Module } from '@nestjs/common'
import { PgPrismaService } from '@/modules/database'
import { FieldsController } from './fields.controller';
import { FieldsService } from './fields.service';

@Module({
  providers: [
    FieldsService,
    PgPrismaService,
  ],
  controllers: [
    FieldsController,
  ],
  exports: [
    FieldsService,
  ]
})
export class FieldsModule {}