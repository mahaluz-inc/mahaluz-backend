import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto {
    @ValidateNested({ each: true })
    @Type(() => User)
    @ApiProperty({ required: true, type: () => [User] })
    user: User
}
