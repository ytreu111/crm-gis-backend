import { Prisma } from '@prisma/client'

export function fieldSelectWithConstraint() {
  return {
    omit: { directory_id: true },
    include: {
      constraint: {
        omit: { id: true, field_id: true },
        include: {
          string_constraint: { omit: { constraint_id: true, id: true } },
          integer_constraint: { omit: { constraint_id: true, id: true } },
        },
      },
    },
  } satisfies Prisma.Directory$fieldsArgs
}