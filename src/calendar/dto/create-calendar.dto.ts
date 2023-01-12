import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { validate, ValidateNested } from "class-validator";
import { Calendar } from "../entities/calendar.entity";

export class CreateCalendarDto {
    @ValidateNested({ each: true })
    @Type(() => Calendar)
    @ApiProperty({ required: true, type: () => [Calendar] })
    calendar: Calendar
}

