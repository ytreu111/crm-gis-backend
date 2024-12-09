import { Module } from "@nestjs/common";
import { WriteController } from "./write.controller";

@Module({
  controllers: [WriteController],
})
export class WriteModule {}
