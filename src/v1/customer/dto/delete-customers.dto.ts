import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DeleteCustomersDto {
  @IsNotEmpty()
  @ApiProperty()
  ids: string[];
}
