import { Module } from "@nestjs/common";
import { ElementsController } from "./elements.controller";
import { ElementsService } from "./elements.service";
import { MongooseModule } from "@nestjs/mongoose";
import { DirectoryElement, DirectoryElementSchema } from "./element.schema";

@Module({
  controllers: [ElementsController],
  imports: [
    MongooseModule.forFeature([
      { name: DirectoryElement.name, schema: DirectoryElementSchema },
    ]),
  ],
  providers: [ElementsService],
})
export class ElementsModule {}
