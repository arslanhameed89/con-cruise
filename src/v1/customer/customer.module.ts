import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from '../../core/core.module';
import { ProvidersModule } from '../../providers/providers.module';
import { CustomerController } from './customer.controller';
import { CustomerProviders } from './providers/customer.providers';
import { CustomerService } from './services/customer.service';
import { CustomerRepository } from './repository/customer.repository';
import { CustomerSeedCommand } from './seed/customer.seed.command';

@Module({
  imports: [ProvidersModule, CoreModule, ConfigModule],
  controllers: [CustomerController],
  providers: [
    ...CustomerProviders,
    CustomerService,
    CustomerRepository,
    CustomerSeedCommand,
  ],
  exports: [...CustomerProviders, CustomerService, CustomerRepository],
})
export class CustomerModule {}
