import { Prisma } from '@prisma-client'

export function fieldSelectWithConstraint() {
  return {
    // omit: { directory_id: true },
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
  } satisfies Prisma.Directory$fieldsArgs
}