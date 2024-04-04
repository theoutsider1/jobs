import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Recruiter } from '@prisma/client';
import { GetRecruiter } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { OfferDTO } from './dto';
import { RecruiterService } from './recruiter.service';


@UseGuards(JwtGuard)
@Controller('recruteurs')
export class RecruiterController {
    constructor(private recruiterService : RecruiterService){}

// Recruiter Profile 
    @Get('profile')
    getProfil(@GetRecruiter() recruiterId:Recruiter){        
        return recruiterId;
    }

// Add a Job offer
    @Post('addjob')
    async addOffer(@Body() offerDto: OfferDTO, @GetRecruiter() recuiter: Recruiter){
        
        // get the job creator by the custom decorator (GetREcruiter)
        const idRecuiter: number = recuiter.id

        return await this.recruiterService.createOffer(offerDto, idRecuiter);
    }

// Show all the Job Offers
    @Get('myjoboffers')
    async myOffers(@GetRecruiter() recruiter : Recruiter){
        const recruiterId = recruiter.id; 
    return await this.recruiterService.myJobOffers(recruiterId);

    }
}
