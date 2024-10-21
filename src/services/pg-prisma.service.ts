import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from '@pg-client';

@Injectable()
export class PgPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
