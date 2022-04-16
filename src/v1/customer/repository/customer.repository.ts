import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Customer } from '../schemas/customer.schema';
import { BaseRepository } from '../../../core/repository';

@Injectable()
export class CustomerRepository extends BaseRepository<Customer> {
  constructor(
    @Inject('CUSTOMER_MODEL')
    private readonly customerModel: Model<Customer>,
  ) {
    super(customerModel);
  }
  ///other repository methods

  async updateQuantityByQuery(
    condition: Record<string, any>,
    item: Record<string, any>,
    options = { new: true },
  ): Promise<any> {
    try {
      return await this.customerModel
        .findOneAndUpdate(condition, item, options)
        .exec();
    } catch (err) {
      throw err;
    }
  }

  async updateAllByQuery(
    condition: Record<string, any>,
    item: Record<string, any>,
    options = { new: true },
  ): Promise<any> {
    try {
      return await this.customerModel
        .updateMany(condition, item, options)
        .exec();
    } catch (err) {
      throw err;
    }
  }
}
