import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarModule } from './calendar/calendar.module';
import { Calendar } from './calendar/entities/calendar.entity';
import { UsersModule } from './users/users.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [
    CalendarModule,
    LocationModule,
    UsersModule,
    MongooseModule.forRoot("mongodb+srv://luzitAdmin:luzitAdmin1@luzitcluster.zi3g3.mongodb.net/?retryWrites=true&w=majority", { dbName: 'uniqtrip' }),
    MongooseModule.forFeature([{ name: Calendar.name, schema: Calendar, collection: "caleder" }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
