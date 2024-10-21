import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../../prisma/generated/mongo/client";

@Injectable()
export class MongoPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

