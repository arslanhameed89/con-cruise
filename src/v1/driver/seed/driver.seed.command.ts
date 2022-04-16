import { Injectable } from '@nestjs/common';
import { DriverService } from '../services/driver.service';
import { Command } from 'nestjs-command';
import { driverData } from './data/driver.data';
export type DriverDataType = {
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
export class DriverSeedCommand {
  constructor(private readonly driverService: DriverService) {}
  @Command({
    command: 'seed:driver',
    describe: 'Seed Drivers Data',
  })
  async create() {
    try {
      const mapped: DriverDataType[] = [];
      driverData.map((data) => {
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
      await this.driverService.createMany(mapped);
      console.info('driver data seeded successfully');
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
