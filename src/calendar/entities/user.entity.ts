import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { Schedule } from "./schedule.entity";

export class User {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    userId: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    description: string;

    @IsNotEmpty()
    @IsDateString()
    @ApiProperty()
    startTime: Date;

    @IsNotEmpty()
    @IsDateString()
    @ApiProperty()
    endTime: Date;
}
