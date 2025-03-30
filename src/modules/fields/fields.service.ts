import { Prisma } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import { PgPrismaService } from '@/modules/database'
import { fieldSelectWithConstraint } from './lib/prisma/field-select-with-constraint'
import { parseFieldConstraint } from './lib/parse-field-constraint'
import { CreateFieldType } from './model/fields.model'
import { UpdateFieldBodyDto } from './dto/body/update-field-body.dto'

@Injectable()
export class FieldsService {
  constructor(
    public pgPrismaService: PgPrismaService,
  ) {}

  async findAll({ directoryId }: { directoryId?: string }) {
    let fields = await this.pgPrismaService.directoryField.findMany({
      where: { directory_id: directoryId },
      ...fieldSelectWithConstraint(),
    })

    fields = fields.map(parseFieldConstraint)

    return fields
  }

  async findById(fieldId: string) {
    const field = await this.pgPrismaService.directoryField.findFirst({
      where: { id: fieldId },
      ...fieldSelectWithConstraint(),
    })

    return field ? parseFieldConstraint(field) : null
  }

  async create(directory_id: string, field: CreateFieldType) {
    const createFieldData = this.prepareCreateField(directory_id, field)

    const createdField = await this.pgPrismaService.directoryField.create({
      data: createFieldData,
      ...fieldSelectWithConstraint(),
    })

    return parseFieldConstraint(createdField)
  }

  async update(fieldId: string, body: UpdateFieldBodyDto) {
    const field = await this.pgPrismaService.directoryField.findFirst({
      where: { id: fieldId },
      select: { type: true },
    })

    if (!field) return null

    const preparedUpdateData = this.prepareUpdateField(body, field)

    const updateField = await this.pgPrismaService.directoryField
      .update({
        ...fieldSelectWithConstraint(),
        where: { id: fieldId },
        data: preparedUpdateData,
      })

    return parseFieldConstraint(updateField)
  }

  delete(fieldId: string) {
    return this.pgPrismaService.directoryField.delete({ where: { id: fieldId } })
  }

  createMany(directory_id: string, fields: CreateFieldType[]) {
    const createPromises = fields.map(async (field) => {
      return this.create(directory_id, field)
    })

    return Promise.all(createPromises)
  }

  async updateMany(fields) {
    const ids = fields.map((f) => f.id)
    const updatedDbFields = await this.pgPrismaService.directoryField.findMany({ where: { id: { in: ids } } })

    const updatePromises = fields.map((f) => {
      const dbField = updatedDbFields.find((d) => d.id === f.id)

      if (!dbField) throw Error('')

      const preparedData = this.prepareUpdateField(f, dbField)

      return this.pgPrismaService.directoryField
        .update({
          where: { id: f.id },
          data: preparedData,
        })
    })

    return Promise.all(updatePromises)
  }

  deleteMany(deleteIds: string[]) {
    return this.pgPrismaService.directoryField.deleteMany({
      where: { id: { in: deleteIds } },
    })
  }

  async updateDirectoryFields(directory_id: string, fields: CreateFieldType[]) {
    const directoryFields = await this.pgPrismaService.directoryField.findMany({ where: { directory_id } })
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

    const resultFields = await this.pgPrismaService.directoryField.findMany({
      where: { directory_id },
      ...fieldSelectWithConstraint(),
    })

    return resultFields.map(parseFieldConstraint)
  }

  private prepareCreateField(directory_id: string, field: CreateFieldType): Prisma.DirectoryFieldUncheckedCreateInput {
    const { constraint, ...otherFieldFields } = field

    let _constraint: Prisma.DirectoryFieldConstraintCreateWithoutFieldInput

    switch (otherFieldFields.type) {
      case 'string': {
        _constraint = {
          string_constraint: { create: constraint as Prisma.StringFieldContraintCreateWithoutConstraintInput },
        }
        break
      }
      case 'integer': {
        _constraint = {
          integer_constraint: { create: constraint as Prisma.IntegerFieldConstraintCreateWithoutConstraintInput },
        }
        break
      }
    }

    return {
      directory_id,
      ...otherFieldFields,
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
        case 'string': {
          deleteConstraint = {
            string_constraint: { delete: true },
          }
          break
        }
        case 'integer': {
          deleteConstraint = {
            integer_constraint: { delete: true },
          }
          break
        }
      }

      switch (newType) {
        case 'string': {
          createConstraint = {
            string_constraint: { create: constraint as Prisma.StringFieldContraintUncheckedCreateWithoutConstraintInput },
          }
          break
        }
        case 'integer': {
          createConstraint = {
            integer_constraint: { create: constraint as Prisma.IntegerFieldConstraintUncheckedCreateWithoutConstraintInput },
          }
          break
        }
      }
    } else {
      switch (otherFieldFields.type) {
        case 'string': {
          updateConstraint = {
            string_constraint: { update: constraint as Prisma.StringFieldContraintUpdateWithoutConstraintInput },
          }
          break
        }
        case 'integer': {
          updateConstraint = {
            integer_constraint: { update: constraint as Prisma.IntegerFieldConstraintUpdateWithoutConstraintInput },
          }
          break
        }
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
