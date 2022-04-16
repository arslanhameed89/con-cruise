import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';

@Module({
  imports: [CustomerModule, DriverModule],
  providers: [],
  exports: [],
})
export class V1Module {}
