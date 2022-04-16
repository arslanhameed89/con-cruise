import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  locationLatitude: number;

  @ApiProperty()
  @IsNotEmpty()
  locationLongitude: number;

  @ApiProperty()
  @IsNotEmpty()
  numberOfRides: number;

  @ApiProperty()
  @IsNotEmpty()
  rating: number;

  @ApiProperty()
  @IsOptional()
  coordinates: Record<string, any>;
}
