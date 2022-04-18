import { Injectable } from '@nestjs/common';
import { DriverRepository } from '../repository/driver.repository';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { Driver } from '../schemas/driver.schema';
import { findDriverByDistanceQuery } from '../utils/queries';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DriverService {
  constructor(
    private driverRepository: DriverRepository,
    private configService: ConfigService,
  ) {}

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

  async findDriverByDistance(customer: Record<string, any>): Promise<any> {
    try {
      const maxDistance = this.configService.get<string>(
        'app.MAX_RADIUS_DISTANCE_KM',
      );
      const query = findDriverByDistanceQuery(
        customer.locationLatitude,
        customer.locationLongitude,
        parseInt(maxDistance),
      );
      const result = await this.driverRepository.aggregate(query);

      const { matchedResult, matchedDrivers } =
        this.extractedMatchedDriverWeightage(result, customer);

      return { matchedRides: matchedResult, matchedDrivers: matchedDrivers };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  private extractedMatchedDriverWeightage(
    result,
    customer: Record<string, any>,
  ) {
    let distanceWeightage = 0;
    let ratingWeightage = 0;
    let ridesWeightage = 0;
    const matchedResult = [];
    const matchedDrivers = [];
    result.map((driver) => {
      const span = parseFloat(driver.distance.toFixed(2));
      if (span <= 3) {
        distanceWeightage = 7;
      } else if (span >= 3 && span <= 5) {
        distanceWeightage = 3;
      }

      if (customer.rating >= driver.rating) {
        ratingWeightage = 3;
      }

      if (customer.numberOfRides <= 2 && driver.numberOfRides >= 3) {
        ridesWeightage = 5;
      } else if (customer.numberOfRides > 2 && driver.numberOfRides < 3) {
        ridesWeightage = 2;
      }

      const totalWeightage: number =
        distanceWeightage + ratingWeightage + ridesWeightage;
      matchedResult.push(
        `Driver ${driver.name} has been matches to customer ${customer.name} with weightage :: ${totalWeightage}`,
      );
      matchedDrivers.push(driver._id.toString());
    });
    return { matchedResult, matchedDrivers };
  }
}
