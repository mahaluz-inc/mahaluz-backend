import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { Calendar, CalenderSchema } from './entities/calendar.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [CalendarController],
  providers: [CalendarService],
  imports: [
    MongooseModule.forFeature([{ name: Calendar.name, schema: CalenderSchema , collection: "calendars"}])
  ]
})
export class CalendarModule {}
