import { Optional } from "@nestjs/common";
import { IsNumber, IsOptional, IsString } from "class-validator";


export class OfferDTO {
    @IsString()
    title: string;

    @IsString()
    city: string;
    
    @IsString()
    contractType: string;

    @IsString()
    experience: string;

    @IsString()
    domaine: string;

    @IsString()
    companyName: string;

    @IsString()
    description: string;

    @IsString()
    jobType: string;

    @IsString()
    missions: string;

    @IsString()
    profil: string;

    
    @IsOptional()
    advantages: string[];

    @Optional()
    publishedById: number;


}