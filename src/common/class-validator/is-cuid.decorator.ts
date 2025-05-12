import { registerDecorator, ValidationOptions } from 'class-validator'
import { isCuid } from 'cuid'

export function IsCuid(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isCuid',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return typeof value === 'string' && isCuid(value)
        },
        defaultMessage() {
          return '$property must be a valid CUID'
        },
      },
    })
  }
}