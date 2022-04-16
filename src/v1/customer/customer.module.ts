import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CoreModule } from '../../core/core.module';
import { ProvidersModule } from '../../providers/providers.module';
import { CustomerController } from './customer.controller';
import { CustomerProviders } from './providers/customer.providers';
import { CustomerService } from './services/customer.service';
import { CustomerRepository } from './repository/customer.repository';

@Module({
  imports: [ProvidersModule, CoreModule, ConfigModule, ConfigService],
  controllers: [CustomerController],
  providers: [...CustomerProviders, CustomerService, CustomerRepository],
  exports: [...CustomerProviders, CustomerService, CustomerRepository],
})
export class CustomerModule {}
