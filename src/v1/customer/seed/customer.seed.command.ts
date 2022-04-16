import { Injectable } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Command } from 'nestjs-command';

@Injectable()
export class CustomerSeedCommand {
  constructor(private readonly customerService: CustomerService) {}

  @Command({
    command: 'seed:customer',
    describe: 'Seed Customer Data',
  })
  async create() {
    this.customerService.createMany([]);
  }
}
