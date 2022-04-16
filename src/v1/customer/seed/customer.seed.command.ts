import { Injectable } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Command } from 'nestjs-command';
import { customerData } from './data/customer.data';
export type CustomerDataType = {
  name: string;
  locationLatitude: number;
  locationLongitude: number;
  numberOfRides: number;
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

@Injectable()
export class CustomerSeedCommand {
  constructor(private readonly customerService: CustomerService) {}
  @Command({
    command: 'seed:customer',
    describe: 'Seed Customer Data',
  })
  async create() {
    try {
      const mapped: CustomerDataType[] = [];
      customerData.map((data) => {
        delete data.id;
        mapped.push({
          ...data,
          coordinates: {
            longitude: data.locationLongitude || 0.0,
            latitude: data.locationLatitude || 0.0,
          },
        });
        return data;
      });

      console.info(mapped);
      await this.customerService.createMany(mapped);
      console.info('customer data seeded successfully');
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
