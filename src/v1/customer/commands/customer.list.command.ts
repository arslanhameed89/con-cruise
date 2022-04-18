import { Injectable } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Command } from 'nestjs-command';

@Injectable()
export class CustomerListCommand {
  constructor(private readonly customerService: CustomerService) {}
  @Command({
    command: 'list:customer',
    describe: 'list all existing Customers',
  })
  async create() {
    try {
      console.info('customer data listed process started');
      const data = await this.customerService.findAll();
      console.info(data);
      process.exit(1);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
