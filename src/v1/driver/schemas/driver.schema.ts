import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class coordinates {
  @Prop()
  longitude: number;

  @Prop()
  latitude: number;
}

@Schema({ autoCreate: true, timestamps: true })
export class Driver extends Document {
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

export const driverSchema = SchemaFactory.createForClass(Driver);

driverSchema.index({ coordinates: '2dsphere' });
