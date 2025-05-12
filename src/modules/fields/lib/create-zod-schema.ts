import { FieldResponseType } from '@/modules/fields/model/fields.model'
import { z, ZodType } from 'zod'
import { DirectoryFieldType } from '@prisma-client'

export function createZodSchema(fields: FieldResponseType[]) {
  const zodFields = fields.map((field) => {
    let zField: ZodType

    switch (field.type) {
      case DirectoryFieldType.string: {
        let str = z.string()

        if (field.constraint.min_length) {
          str = str.min(field.constraint.min_length)
        }

        if (field.constraint.max_length) {
          str = str.max(field.constraint.max_length)
        }

        if (field.constraint.default_value) {
          str = str.default(field.constraint.default_value)
        }

        zField = str
        break
      }
      case DirectoryFieldType.integer: {
        let int = z.number()

        if (field.constraint.min_value) {
          int = int.min(field.constraint.min_value)
        }

        if (field.constraint.max_value) {
          int = int.max(field.constraint.max_value)
        }

        if (field.constraint.default_value) {
          int = int.default(field.constraint.default_value)
        }

        zField = int
        break
      }
      default: {
        throw new Error('Not implemented')
      }
    }

    if (!field.required) {
      zField = zField.optional()
    }

    return [field.code, zField]
  })

  return z.object(Object.fromEntries(zodFields))
}