import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDateString, IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { Task } from "./shift.entity";

export type CalenderDocument = Calendar & Document;

export class Calendar {
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
    @IsString()
    @ApiProperty()
    @Prop()
    owner: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    @Prop()
    moreInfo: string;

    @IsNotEmpty()
    @IsDateString()
    @ApiProperty()
    @Prop()
    dayDate: Date;

    @ApiProperty()
    @Prop({ type: Object })
    extra_data: Record<string, unknown>;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Task)
    @ApiProperty({ type: () => [Task] })
    @Prop()
    tasks: Task[]
}

export const CalenderSchema = SchemaFactory.createForClass(Calendar);