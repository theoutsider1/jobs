import { Optional } from "@nestjs/common";
import { IsOptional, IsString } from "class-validator";

export class updateJobOfferDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    city: string;
    
    @IsString()
    @IsOptional()
    contractType: string;

    @IsString()
    @IsOptional()
    experience: string;

    @IsString()
    @IsOptional()
    domaine: string;

    @IsString()
    @IsOptional()
    companyName: string;

    @IsString()
    @IsOptional()
    description: string;

    @IsString()
    @IsOptional()
    jobType: string;

    @IsString()
    @IsOptional()
    missions: string;

    @IsString()
    @IsOptional()
    profil: string;
   
    @IsOptional()
    advantages: string[];

    @Optional()
    publishedById: number;

}