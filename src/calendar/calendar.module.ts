import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CalendarController } from './calendar.controller';
import { Calendar, CalenderSchema } from './entities/calendar.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { CalendarProxy } from './calendar.proxy';

@Module({
  controllers: [CalendarController],
  providers: [CalendarService, CalendarProxy],
  imports: [
    MongooseModule.forFeature([{ name: Calendar.name, schema: CalenderSchema , collection: "calendars"}])
  ]
})
export class CalendarModule {}
