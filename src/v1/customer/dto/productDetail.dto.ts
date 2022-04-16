import { ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class ProductDetailDto {
  @ApiProperty()
  @IsNotEmpty()
  productId: string;

  @ApiProperty()
  latitude: string;

  @ApiProperty()
  longitude: string;
}
