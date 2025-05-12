import { Injectable, Type } from '@nestjs/common'
import { PrismaProvider } from './prisma.provider'
import { PrismaClient } from '@prisma-client'
import { Class } from 'utility-types'

const ExtendedPrismaClient = class {
  constructor(provider: PrismaProvider) {
    return provider.withExtensions()
  }
} as Class<PrismaClient>

@Injectable()
export class PrismaService extends ExtendedPrismaClient {
  constructor(provider: PrismaProvider) {
    super(provider)
  }
}
