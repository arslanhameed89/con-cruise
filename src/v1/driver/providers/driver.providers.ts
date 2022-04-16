import { Connection } from 'mongoose';
import { driverSchema } from '../schemas/driver.schema';

export const DriverProviders = [
  {
    provide: 'DRIVER_MODEL',
    useFactory: (connection: Connection): any =>
      connection.model('drivers', driverSchema, 'drivers'),
    inject: ['MONGODB_PROVIDER'],
  },
];
