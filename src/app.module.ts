import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module';
import { CoreModule } from './core/core.module';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),
    ProvidersModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
