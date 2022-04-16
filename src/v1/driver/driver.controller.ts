import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DriverService } from './services/driver.service';

@Controller('v1/driver')
@ApiTags('driver')
export class DriverController {
  constructor(private driverService: DriverService) {}
}
