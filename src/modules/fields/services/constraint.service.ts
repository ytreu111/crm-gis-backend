import { Injectable } from '@nestjs/common'
import { PgPrismaService } from '@/modules/database'
import { FieldTypeEnum } from '../model/fields.model'

@Injectable()
export class ConstraintService {
  constructor(
    private readonly pgPrismaService: PgPrismaService,
  ) {}

  async create(type: keyof typeof FieldTypeEnum, constraint) {
    const { id: constraint_id } = await this.pgPrismaService.directoryFieldConstraint.create({})

    switch (type) {
      case 'integer': {
        this.pgPrismaService.integerFieldConstraint.create({ data: { constraint_id, ...constraint } })
        break
      }
      case 'string': {
        this.pgPrismaService.stringFieldContraint.create({ data: { constraint_id, ...constraint } })
        break
      }
      case 'date': {
        this.pgPrismaService.dateFieldContraint.create({ data: { constraint_id, ...constraint } })
        break
      }
      case 'datetime': {
        this.pgPrismaService.dateTimeFieldContraint.create({ data: { constraint_id, ...constraint } })
        break
      }
      case 'time': {
        this.pgPrismaService.timeFieldContraint.create({ data: { constraint_id, ...constraint } })
        break
      }
      case 'point': {
        this.pgPrismaService.pointFieldContraint.create({ data: { constraint_id, ...constraint } })
        break
      }
      case 'linestring': {
        this.pgPrismaService.lineStringFieldContraint.create({ data: { constraint_id, ...constraint } })
        break
      }
      case 'polygon': {
        this.pgPrismaService.polygonFieldContraint.create({ data: { constraint_id, ...constraint } })
        break
      }
    }

    return constraint_id
  }
}
