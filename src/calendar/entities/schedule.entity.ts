import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsDate, IsDateString, IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { Task } from "./shift.entity";

export class Schedule {
    @IsOptional()
    @IsString()
    @MinLength(10)
    @ApiProperty()
    @Prop({ required: true })
    uniqId: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @ApiProperty()
    @Prop()
    title: string;

    @IsNotEmpty()
    @IsDateString()
    @ApiProperty()
    @Prop()
    dayDate: Date;

    @ApiProperty()
    @Prop()
    extra_data: unknown;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Task)
    @ApiProperty({ type: () => [Task] })
    @Prop()
    shifts: Task[]
}
