import { IsEmail, IsOptional, IsString } from "class-validator";


export class UpdateRecruiterDto {
    
    
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    fullName: string;

    @IsString()
    @IsOptional()
    // should be a number
    phoneNumber : string;

    @IsString()
    @IsOptional()
    password : string;
    
}