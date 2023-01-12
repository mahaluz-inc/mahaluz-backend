import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Schedule } from './schedule.entity';

export type CalenderDocument = CalenderMongo & Document;

@Schema()
export class CalenderMongo {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  owner: string;

  @Prop()
  moreInfo: string;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;

  @Prop({ required: true })
  timeDiff: number;

  @Prop({ required: true })
  schedules: Schedule[]
}


export const CalenderSchema = SchemaFactory.createForClass(CalenderMongo);