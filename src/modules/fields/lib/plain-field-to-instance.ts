import { FieldResponseByType } from './field-help'
import { FieldResponseType } from '../model/fields.model'

export function plainFieldToInstance(field): FieldResponseType {
  const Dto = FieldResponseByType[field.type]

  return new Dto(field)
}