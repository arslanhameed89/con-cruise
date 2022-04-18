import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { CustomerRepository } from '../repository/customer.repository';
import { ProvidersModule } from '../../../providers/providers.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../../../config/app.config';
import { CustomerProviders } from '../providers/customer.providers';
import { Types } from 'mongoose';
import { Customer } from '../schemas/customer.schema';

describe('CustomerService', () => {
  let service: CustomerService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [appConfig],
        }),
        ProvidersModule,
      ],
      providers: [...CustomerProviders, CustomerService, CustomerRepository],
    }).compile();
    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('fetchAll', async () => {
    const serviceSpy = jest
      .spyOn(service, 'findAll')
      .mockImplementation(async (): Promise<Customer[]> => {
        return [
          {
            name: 'Elysha Prop',
            locationLatitude: 59.3525393,
            locationLongitude: 18.0191452,
            coordinates: { longitude: 18.0191452, latitude: 59.3525393 },
            numberOfRides: 77,
            rating: 3.6,
          } as Customer,
          {
            name: 'Meggie Illston',
            locationLatitude: 40.3779093,
            locationLongitude: -7.8440342,
            coordinates: { longitude: -7.8440342, latitude: 40.3779093 },
            numberOfRides: 26,
            rating: 3.8,
          } as Customer,
        ];
      });
    const results = await service.findAll();
    expect(results).toHaveLength(2);
    serviceSpy.mockClear();
  });
});
