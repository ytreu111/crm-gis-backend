import { FieldTypeEnum } from '../model/fields.model'

export function parseFieldConstraint(field) {
  let _constraint

  switch (field.type) {
    case FieldTypeEnum.string: {
      _constraint = field.constraint.string_constraint
      break
    }
    case FieldTypeEnum.integer: {
      _constraint = field.constraint.integer_constraint
      break
    }
  }

  return {
    ...field,
    constraint: _constraint,
  }
}