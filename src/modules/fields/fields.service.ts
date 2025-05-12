import { DirectoryFieldType, Prisma } from '@prisma-client'
import { Injectable } from '@nestjs/common'
import { plainFieldToInstance, fieldSelectWithConstraint } from './lib'
import { CreateFieldType } from './model/fields.model'
import { omit } from 'lodash'
import { PrismaService } from '@/modules/database'

@Injectable()
export class FieldsService {
  constructor(
    public prismaService: PrismaService,
  ) {}

  async findAll({ directoryId }: { directoryId: string }) {
    const fields = await this.prismaService.directoryField.findMany({
      where: { directory_id: directoryId },
      orderBy: { order: 'asc' },
      ...fieldSelectWithConstraint(),
    })

    return fields.map(plainFieldToInstance)
  }

  async findById(fieldId: string) {
    const field = await this.prismaService.directoryField.findFirst({
      where: { id: fieldId },
      ...fieldSelectWithConstraint(),
    })

    if (!field) return null

    return plainFieldToInstance(field)
  }

  create(directory_id: string, field: CreateFieldType) {
    const createFieldData = this.prepareCreateField(directory_id, field)

    return this.prismaService.directoryField.create({
      data: createFieldData,
      ...fieldSelectWithConstraint(),
    })
  }

  async update(fieldId: string, body) {
    const field = await this.prismaService.directoryField.findFirst({
      where: { id: fieldId },
      select: { type: true },
    })

    if (!field) return null

    const preparedUpdateData = this.prepareUpdateField(body, field)

    return this.prismaService.directoryField.update({
      ...fieldSelectWithConstraint(),
      where: { id: fieldId },
      data: preparedUpdateData,
    })
  }

  delete(fieldId: string) {
    return this.prismaService.directoryField.delete({ where: { id: fieldId } })
  }

  createMany(directory_id: string, fields: CreateFieldType[]) {
    const createPromises = fields.map(async (field) => {
      return this.create(directory_id, field)
    })

    return Promise.all(createPromises)
  }

  async updateMany(fields) {
    const ids = fields.map((f) => f.id)
    const updatedDbFields = await this.prismaService.directoryField.findMany({ where: { id: { in: ids } } })

    const updatePromises = fields.map((f) => {
      const dbField = updatedDbFields.find((d) => d.id === f.id)

      if (!dbField) throw Error('')

      const preparedData = this.prepareUpdateField(f, dbField)

      return this.prismaService.directoryField
        .update({
          where: { id: f.id },
          data: preparedData,
        })
    })

    return Promise.all(updatePromises)
  }

  deleteMany(deleteIds: string[]) {
    return this.prismaService.directoryField.deleteMany({
      where: { id: { in: deleteIds } },
    })
  }

  async updateDirectoryFields(directory_id: string, fields: CreateFieldType[]) {
    const directoryFields = await this.prismaService.directoryField.findMany({ where: { directory_id } })
    const promiseList: Array<Promise<any>> = []

    const createFields = fields.filter((field) => !field.id)
    const deleteFields = directoryFields.filter((field) => !fields.find((requestField) => field.id === requestField.id))
    const updateFields = fields.filter((requestField) => directoryFields.find((field) => field.id === requestField.id))

    if (createFields.length) {
      promiseList.push(this.createMany(directory_id, createFields))
    }

    if (deleteFields.length) {
      const deleteIds = deleteFields.map((el) => el.id)
      promiseList.push(this.deleteMany(deleteIds))
    }

    if (updateFields.length) {
      promiseList.push(this.updateMany(updateFields))
    }

    await Promise.all(promiseList)

    return this.prismaService.directoryField.findMany({
      where: { directory_id },
      ...fieldSelectWithConstraint(),
    })
  }

  private prepareCreateField(directory_id: string, field: CreateFieldType): Prisma.DirectoryFieldUncheckedCreateInput {
    let _constraint: Prisma.DirectoryFieldConstraintCreateWithoutFieldInput

    switch (field.type) {
      case DirectoryFieldType.string: {
        _constraint = {
          string_constraint: { create: field.constraint },
        }
        break
      }
      case DirectoryFieldType.integer: {
        _constraint = {
          integer_constraint: { create: field.constraint },
        }
        break
      }
      case DirectoryFieldType.date: {
        _constraint = {
          date_constraint: { create: field.constraint },
        }
        break
      }
      case DirectoryFieldType.datetime: {
        _constraint = {
          datetime_constraint: { create: field.constraint },
        }
        break
      }
      case DirectoryFieldType.time: {
        _constraint = {
          time_constraint: { create: field.constraint },
        }
        break
      }
      default:
        throw Error('not supported type')
    }

    return {
      directory_id,
      ...omit(field, 'constraint'),
      constraint: {
        create: _constraint,
      },
    }
  }

  private prepareUpdateField(field, databaseField) {
    const { constraint, id, ...otherFieldFields } = field

    let updateConstraint: Prisma.DirectoryFieldConstraintUpdateWithoutFieldInput
    let deleteConstraint: Prisma.DirectoryFieldConstraintUpdateWithoutFieldInput
    let createConstraint: Prisma.DirectoryFieldConstraintUpdateWithoutFieldInput

    if (field.type !== databaseField.type) {
      const oldType = field.type
      const newType = databaseField.type

      switch (oldType) {
        case DirectoryFieldType.string: {
          deleteConstraint = {
            string_constraint: { delete: true },
          }
          break
        }
        case DirectoryFieldType.integer: {
          deleteConstraint = {
            integer_constraint: { delete: true },
          }
          break
        }
        case DirectoryFieldType.date: {
          deleteConstraint = {
            date_constraint: { delete: true },
          }
          break
        }
        case DirectoryFieldType.datetime: {
          deleteConstraint = {
            datetime_constraint: { delete: true },
          }
          break
        }
        case DirectoryFieldType.time: {
          deleteConstraint = {
            time_constraint: { delete: true },
          }
          break
        }
        default:
          throw Error('not supported type')
      }

      switch (newType) {
        case DirectoryFieldType.string: {
          createConstraint = {
            string_constraint: { create: constraint as Prisma.StringFieldContraintUncheckedCreateWithoutConstraintInput },
          }
          break
        }
        case DirectoryFieldType.integer: {
          createConstraint = {
            integer_constraint: { create: constraint as Prisma.IntegerFieldConstraintUncheckedCreateWithoutConstraintInput },
          }
          break
        }
        case DirectoryFieldType.date: {
          createConstraint = {
            date_constraint: { create: constraint as Prisma.DateFieldContraintUncheckedCreateWithoutConstraintInput },
          }
          break
        }
        case DirectoryFieldType.datetime: {
          createConstraint = {
            datetime_constraint: { create: constraint as Prisma.DateTimeFieldContraintUncheckedCreateWithoutConstraintInput },
          }
          break
        }
        case DirectoryFieldType.time: {
          createConstraint = {
            time_constraint: { create: constraint as Prisma.TimeFieldContraintUncheckedCreateWithoutConstraintInput },
          }
          break
        }
        default:
          throw Error('not supported type')
      }
    } else {
      switch (otherFieldFields.type) {
        case DirectoryFieldType.string: {
          updateConstraint = {
            string_constraint: { update: constraint as Prisma.StringFieldContraintUpdateWithoutConstraintInput },
          }
          break
        }
        case DirectoryFieldType.integer: {
          updateConstraint = {
            integer_constraint: { update: constraint as Prisma.IntegerFieldConstraintUpdateWithoutConstraintInput },
          }
          break
        }
        case DirectoryFieldType.date: {
          updateConstraint = {
            date_constraint: { update: constraint as Prisma.DateFieldContraintUpdateWithoutConstraintInput },
          }
          break
        }
        case DirectoryFieldType.datetime: {
          updateConstraint = {
            datetime_constraint: { update: constraint as Prisma.DateTimeFieldContraintUpdateWithoutConstraintInput },
          }
          break
        }
        case DirectoryFieldType.time: {
          updateConstraint = {
            time_constraint: { update: constraint as Prisma.TimeFieldContraintUpdateWithoutConstraintInput },
          }
          break
        }
        default:
          throw Error('not supported type')
      }
    }

    return {
      ...otherFieldFields,
      constraint: {
        update: {
          ...updateConstraint,
          ...deleteConstraint,
          ...createConstraint,
        },
      },
    }
  }
}
