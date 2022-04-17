import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from '../../core/core.module';
import { ProvidersModule } from '../../providers/providers.module';
import { DriverController } from './driver.controller';
import { DriverProviders } from './providers/driver.providers';
import { DriverService } from './services/driver.service';
import { DriverRepository } from './repository/driver.repository';
import { DriverSeedCommand } from './seed/driver.seed.command';
import { DriverListCommand } from './commands/driver.list.command';
import { DriverMatchCommand } from './commands/driver.match.command';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [ProvidersModule, CoreModule, ConfigModule, CustomerModule],
  controllers: [DriverController],
  providers: [
    ...DriverProviders,
    DriverService,
    DriverRepository,
    DriverSeedCommand,
    DriverListCommand,
    DriverMatchCommand,
  ],
  exports: [...DriverProviders, DriverService, DriverRepository],
})
export class DriverModule {}
