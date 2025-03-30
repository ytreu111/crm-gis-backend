import { Module } from '@nestjs/common'
import { PgPrismaService } from '@/modules/database'
import { FieldsController } from './fields.controller';
import { FieldsService } from './fields.service';
import { ConstraintService } from './services/constraint.service'

@Module({
  providers: [
    FieldsService,
    ConstraintService,
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