import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { DriverService } from '../services/driver.service';
import { CustomerService } from '../../customer/services/customer.service';
import { isEmpty } from 'lodash';

@Injectable()
export class DriverMatchCommand {
  private readonly matchedResult: any[];
  private readonly matchedDrivers: any[];
  constructor(
    private readonly driverService: DriverService,
    private readonly customerService: CustomerService,
  ) {
    this.matchedResult = [];
    this.matchedDrivers = [];
  }
  @Command({
    command: 'list:match',
    describe: 'match drivers by algo',
  })
  async process() {
    try {
      console.info('customer data matching process started');
      //let count = 0;
      const data = await this.customerService.findAll();

      for await (const item of data) {
        const response = await this.driverService.findDriverByDistance(item);
        if (
          !isEmpty(response.matchedRides) &&
          response.matchedRides.length > 0
        ) {
          this.matchedResult.push(...response.matchedRides);
          this.matchedDrivers.push(...response.matchedDrivers);
        }
        /*console.info(
          `===========================${ item.name } :: ${count++}============================================`,
        );*/
      }
      console.info(this.matchedResult, this.matchedDrivers);
      process.exit(1);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
