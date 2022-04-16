import { Connection } from 'mongoose';
import { customerSchema } from '../schemas/customer.schema';

export const CustomerProviders = [
  {
    provide: 'CUSTOMER_MODEL',
    useFactory: (connection: Connection): any =>
      connection.model('customers', customerSchema, 'customers'),
    inject: ['MONGODB_PROVIDER'],
  },
];
