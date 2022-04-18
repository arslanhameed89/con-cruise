import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { DriverService } from '../services/driver.service';

@Injectable()
export class DriverListCommand {
  constructor(private readonly driverService: DriverService) {}
  @Command({
    command: 'list:cruiser',
    describe: 'list all existing drivers',
  })
  async create() {
    try {
      console.info('customer data listed process started');
      const data = await this.driverService.findAll();
      console.info(data);
      process.exit(1);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
