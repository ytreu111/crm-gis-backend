import type { NestInterceptor } from '@nestjs/common'
import type { Observable } from 'rxjs'
import { applyDecorators, Injectable, InternalServerErrorException, UseInterceptors } from '@nestjs/common'
import { throwError } from 'rxjs'

@Injectable()
class NotImplementedInterceptor implements NestInterceptor {
  intercept(): Observable<any> {
    return throwError(() => new InternalServerErrorException('Метод не реализован'))
  }
}

export function NotImplementedError() {
  return applyDecorators(UseInterceptors(NotImplementedInterceptor))
}