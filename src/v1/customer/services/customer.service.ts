import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomerRepository } from '../repository/customer.repository';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    private customerRepository: CustomerRepository,
    private configService: ConfigService,
  ) {}

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return `This action returns all test`;
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
