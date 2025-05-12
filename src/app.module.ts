import { Module } from '@nestjs/common'
import { SentryGlobalFilter, SentryModule } from '@sentry/nestjs/setup'
import { ConfigModule } from '@nestjs/config'
import { DirectoriesModule } from './modules/directories/directories.module'
import { APP_FILTER, RouterModule } from '@nestjs/core'
import { FieldsModule } from '@/modules/fields'
import { ElementsModule } from '@/modules/elements'
import { LayersModule } from '@/modules/layers'
import { ServerMetricsModule } from '@/modules/server-metrics'
import { PrismaModule } from '@/modules/database'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    SentryModule.forRoot(),
    FieldsModule,
    ElementsModule,
    DirectoriesModule,
    // LayersModule,
    // ServerMetricsModule,
    RouterModule.register([
      {
        path: 'directories',
        module: DirectoriesModule,
        children: [
          // {
          //   path: 'elements',
          //   module: ElementsModule,
          // },
          {
            path: 'fields',
            module: FieldsModule,
          },
        ],
      },
      // {
      //   path: 'layers',
      //   module: LayersModule,
      // },
      // {
      //   path: 'server-metrics',
      //   module: ServerMetricsModule,
      // },
    ]),
    // MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.mzzqv.mongodb.net/public?retryWrites=true&w=majority&appName=Cluster0", {
    // MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.mzzqv.mongodb.net/public?retryWrites=true&w=majority&appName=Cluster0", {
    //   auth: { username: "admin", password: "admin" },
    // }),
    // MongooseModule.forRootAsync({
    //   // imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     uri: configService.get<string>("MONGO_DATABASE_URL"),
    //     dbName: configService.get<string>("MONGO_DB_NAME"),
    //   }),
    // }),
    // FieldsModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
  ],
})
export class AppModule {
}
