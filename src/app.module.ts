import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { DirectoryModule } from './directory/directory.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    DirectoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
