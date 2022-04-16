import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Driver } from '../schemas/driver.schema';
import { BaseRepository } from '../../../core/repository';

@Injectable()
export class DriverRepository extends BaseRepository<Driver> {
  constructor(
    @Inject('DRIVER_MODEL')
    private readonly driverModel: Model<Driver>,
  ) {
    super(driverModel);
  }
  ///other repository methods
}
