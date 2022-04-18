import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { ProvidersModule } from '../../providers/providers.module';
import { CoreModule } from '../../core/core.module';
import { ConfigModule } from '@nestjs/config';
import { CustomerProviders } from './providers/customer.providers';
import { CustomerService } from './services/customer.service';
import { CustomerRepository } from './repository/customer.repository';
import appConfig from '../../config/app.config';
import { Customer } from './schemas/customer.schema';

describe('CustomerController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [appConfig],
        }),
        ProvidersModule,
        CoreModule,
        ConfigModule,
      ],
      controllers: [CustomerController],
      providers: [...CustomerProviders, CustomerService, CustomerRepository],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create customer', async () => {
    const response: Customer = await controller.create({
      name: 'Arslan',
      locationLatitude: 40.3779093,
      locationLongitude: -7.8440342,
      coordinates: { longitude: -7.8440342, latitude: 40.3779093 },
      numberOfRides: 26,
      rating: 3.8,
    });
    expect(response).toBeDefined();
    expect(response._id).toBeDefined();
  });
});
