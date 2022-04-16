import { Injectable } from '@nestjs/common';
import { DriverRepository } from '../repository/driver.repository';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { Driver } from '../schemas/driver.schema';

@Injectable()
export class DriverService {
  constructor(private driverRepository: DriverRepository) {}

  async findAll(): Promise<Driver[]> {
    try {
      return await this.driverRepository.find();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async createMany(createDriverDto: CreateDriverDto[]) {
    try {
      return await this.driverRepository.createMany(createDriverDto);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

}
