import { Injectable } from '@nestjs/common';
import { CalendarProxy } from './calendar.proxy';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';

@Injectable()
export class CalendarService {
  constructor(private calendarProxy: CalendarProxy) {}

  create(createCalendarDto: CreateCalendarDto) {
    return 'This action adds a new calendar';
  }

  async findAll() {
    return this.calendarProxy.findAll();
  }

  async findOne(id: string) {
    return this.calendarProxy.findOne(id);
  }

  update(id: number, updateCalendarDto: UpdateCalendarDto) {
    return `This action updates a #${id} calendar`;
  }

  remove(id: number) {
    return `This action removes a #${id} calendar`;
  }
}
