import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export type UserDocument = User & Document;

export class User {
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
    userId: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ required: false })
    @Prop()
    description: string;
}

export const UserSchema = SchemaFactory.createForClass(User);