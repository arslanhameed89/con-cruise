import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
//import CoreModule from './core/core.module';

@Module({
  imports: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class ProvidersModule {}
