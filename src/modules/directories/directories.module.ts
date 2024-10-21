import { Module } from "@nestjs/common";
import { DirectoriesController } from "./directories.controller";
import { FieldsModule } from "./fields/fields.module";
import { DirectoriesService } from "./directories.service";
import { PgPrismaService } from "@services";
import { ElementsModule } from "./elements/elements.module";

@Module({
  controllers: [DirectoriesController],
  imports: [FieldsModule, ElementsModule],
  providers: [DirectoriesService, PgPrismaService],
})
export class DirectoriesModule {}
