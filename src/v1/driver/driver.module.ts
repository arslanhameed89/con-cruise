import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from '../../core/core.module';
import { ProvidersModule } from '../../providers/providers.module';
import { DriverController } from './driver.controller';
import { DriverProviders } from './providers/driver.providers';
import { DriverService } from './services/driver.service';
import { DriverRepository } from './repository/driver.repository';
import { DriverSeedCommand } from './seed/driver.seed.command';

@Module({
  imports: [ProvidersModule, CoreModule, ConfigModule],
  controllers: [DriverController],
  providers: [
    ...DriverProviders,
    DriverService,
    DriverRepository,
    DriverSeedCommand,
  ],
  exports: [...DriverProviders, DriverService, DriverRepository],
})
export class DriverModule {}
