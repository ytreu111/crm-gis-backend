import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DirectoriesModule } from "./modules/directories/directories.module";
import { FieldsModule } from "./modules/directories/fields/fields.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.mzzqv.mongodb.net/public?retryWrites=true&w=majority&appName=Cluster0", {
    // MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.mzzqv.mongodb.net/public?retryWrites=true&w=majority&appName=Cluster0", {
    //   auth: { username: "admin", password: "admin" },
    // }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const a = configService.get<string>('MONGO_DATABASE_URL')
        console.log(configService);

        return {
          uri: configService.get<string>('MONGO_DATABASE_URL')
        }
      },
    }),
    // FieldsModule,
    DirectoriesModule,
  ],
})
export class AppModule {}
