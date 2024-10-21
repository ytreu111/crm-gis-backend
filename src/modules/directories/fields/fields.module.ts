import { Module } from "@nestjs/common";
import { FieldsService } from "./fields.service";
import { FieldsController } from "./fields.controller";
import { PgPrismaService } from "@services";

@Module({
  controllers: [FieldsController],
  providers: [FieldsService, PgPrismaService],
  imports: [],
  exports: [FieldsService],
})
export class FieldsModule {}
