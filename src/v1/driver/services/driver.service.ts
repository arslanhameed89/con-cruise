import { Injectable } from '@nestjs/common';
import { DriverRepository } from '../repository/driver.repository';
import { CreateDriverDto } from '../dto/create-driver.dto';

@Injectable()
export class DriverService {
  constructor(private customerRepository: DriverRepository) {}

  async createMany(createCustomerDto: CreateDriverDto[]) {
    try {
      return await this.customerRepository.createMany(createCustomerDto);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

}
