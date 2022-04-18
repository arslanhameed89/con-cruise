import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';
import { ConCommandModule } from './command/con-command.module';

@Module({
  imports: [CustomerModule, DriverModule, ConCommandModule],
  providers: [],
  exports: [],
})
export class V1Module {}
