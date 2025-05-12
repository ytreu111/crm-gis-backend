import { $Enums, Prisma } from '@prisma-client'
import lodash from 'lodash'

const { DirectoryFieldType } = $Enums

function includeFieldConstraint(queryArg: Prisma.Directory$fieldsArgs) {
  return lodash.merge(queryArg, {
    include: {
      constraint: {
        select: {
          string_constraint: { omit: { id: true, constraint_id: true } },
          integer_constraint: { omit: { id: true, constraint_id: true } },
          date_constraint: { omit: { id: true, constraint_id: true } },
          datetime_constraint: { omit: { id: true, constraint_id: true } },
          time_constraint: { omit: { id: true, constraint_id: true } },
        },
      },
    },
  } satisfies Prisma.Directory$fieldsArgs)
}

export const fieldConstraintExtend = Prisma.defineExtension({
  name: 'include-field-constraint',
  query: {
    directoryField: {
      findMany: (options) => {
        const { args, query } = options

        return query(includeFieldConstraint(args))
      },
      findFirst: (options) => {
        const { args, query } = options

        return query(includeFieldConstraint(args))
      },
    },
  },
  result: {
    directoryField: {
      constraint: {
        needs: {},
        compute: (data) => {
          switch (data.type) {
            case DirectoryFieldType.integer: {
              return data.constraint.integer_constraint
            }
            case DirectoryFieldType.string: {
              return data.constraint.string_constraint
            }
            case DirectoryFieldType.date: {
              return data.constraint.date_constraint
            }
            case DirectoryFieldType.datetime: {
              return data.constraint.datetime_constraint
            }
            case DirectoryFieldType.time: {
              return data.constraint.time_constraint
            }
            default:
              throw new Error('Field type not implemented')
          }
        },
      },
    },
  },
})
