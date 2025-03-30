import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DirectoriesModule } from './modules/directories/directories.module'
import { RouterModule } from '@nestjs/core'
import { FieldsModule } from '@/modules/fields'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FieldsModule,
    DirectoriesModule,
    RouterModule.register([
      {
        path: 'directories',
        module: DirectoriesModule,
        children: [
          {
            path: 'fields',
            module: FieldsModule,
          },
        ],
      },
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
})
export class AppModule {
}
