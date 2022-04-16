import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class coordinates {
  @Prop()
  longitude: number;

  @Prop()
  latitude: number;
}

@Schema({ autoCreate: true, timestamps: true })
export class Customer extends Document {
  @Prop()
  name: string;

  @Prop()
  locationLatitude: number;

  @Prop()
  locationLongitude: number;

  @Prop({ type: coordinates })
  coordinates: coordinates;

  @Prop()
  numberOfRides: number;

  @Prop()
  rating: number;
}

export const customerSchema = SchemaFactory.createForClass(Customer);
