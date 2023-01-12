import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarModule } from './calendar/calendar.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [CalendarModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
