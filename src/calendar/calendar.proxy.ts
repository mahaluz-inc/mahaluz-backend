import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { Calendar, CalendarDocument } from './entities/calendar.entity';

@Injectable()
export class CalendarProxy {
    constructor(@InjectModel(Calendar.name) private readonly model: Model<CalendarDocument>,) {

    }

    create(createCalendarDto: CreateCalendarDto) {
        return 'This action adds a new calendar';
    }

    async findAll() {
        return this.model.find({}).lean().exec();
    }

    async findOne(id: string) {
        return this.model.findOne({uniqId: id}).lean().exec();
    }

    update(id: number, updateCalendarDto: UpdateCalendarDto) {
        return `This action updates a #${id} calendar`;
    }

    remove(id: number) {
        return `This action removes a #${id} calendar`;
    }
}
