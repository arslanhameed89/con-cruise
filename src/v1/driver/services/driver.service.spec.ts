import { Test, TestingModule } from '@nestjs/testing';
import { ProvidersModule } from '../../../providers/providers.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../../../config/app.config';
import { DriverProviders } from '../providers/driver.providers';
import { DriverService } from './driver.service';
import { DriverRepository } from '../repository/driver.repository';
import { Driver } from '../schemas/driver.schema';

describe('DriverService', () => {
  let service: DriverService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [appConfig],
        }),
        ProvidersModule,
      ],
      providers: [...DriverProviders, DriverService, DriverRepository],
    }).compile();
    service = module.get<DriverService>(DriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('fetchAll', async () => {
    const serviceSpy = jest
      .spyOn(service, 'findAll')
      .mockImplementation(async (): Promise<Driver[]> => {
        return [
          {
            name: 'Elysha Prop',
            locationLatitude: 59.3525393,
            locationLongitude: 18.0191452,
            coordinates: { longitude: 18.0191452, latitude: 59.3525393 },
            numberOfRides: 77,
            rating: 3.6,
          } as Driver,
          {
            name: 'Meggie Illston',
            locationLatitude: 40.3779093,
            locationLongitude: -7.8440342,
            coordinates: { longitude: -7.8440342, latitude: 40.3779093 },
            numberOfRides: 26,
            rating: 3.8,
          } as Driver,
        ];
      });
    const results = await service.findAll();
    expect(results).toHaveLength(2);
    serviceSpy.mockClear();
  });
});
