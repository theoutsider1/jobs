import { IsEmail, IsOptional, IsString } from "class-validator";





export class RecruiterDto {
    
    @IsOptional()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    fullName: String;

    @IsOptional()
    // should be a number
    phoneNumber : string;

    @IsOptional()
    password : string;
    
}