import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsDateString, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class Task {
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
    moreInfo: string;

    @IsNotEmpty()
    @IsDateString()
    @ApiProperty()
    @Prop({ required: true })
    startTime: Date;

    @IsNotEmpty()
    @IsDateString()
    @ApiProperty()
    @Prop({ required: true })
    endTime: Date;

    // TODO : add limitaitions
}
