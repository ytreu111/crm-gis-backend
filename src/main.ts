import { NestFactory, Reflector } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import * as Sentry from '@sentry/nestjs'
import { PrismaInstrumentation } from '@prisma/instrumentation'
import { NewrelicInterceptor } from '@/newrelic.interceptor'

Sentry.init({
  dsn: 'http://71fc7e09191f22a1d293083a5a43afcb@192.168.1.148:9000/2',
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
  integrations: [
    // Sentry.prismaIntegration(),
  ],
})

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false,
    cors: true,
  })

  app.useGlobalPipes(
    new ValidationPipe({}),
  )

  app.useGlobalInterceptors(
    new NewrelicInterceptor(),
  )

  // app.useGlobalInterceptors(
  //   new ClassSerializerInterceptor(app.get(Reflector), { strategy: 'excludeAll' }),
  // )

  app.setGlobalPrefix('/api')

  const document = SwaggerModule.createDocument(app, new DocumentBuilder().build())
  SwaggerModule.setup('api/docs', app, document, {
    jsonDocumentUrl: 'api/schema/json',
  })

  await app.listen(8000)
}

bootstrap()
