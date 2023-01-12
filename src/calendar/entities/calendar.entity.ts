import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { Schedule } from "./schedule.entity";

export class Calendar {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    owner: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    moreInfo: string;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => Schedule)
    @ApiProperty({ type: () => [Schedule], required: false })
    schedules: Schedule[]
}
