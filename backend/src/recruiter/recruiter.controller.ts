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
    constructor(private recruiterService : RecruiterService  ){}
    @Get('profile')
    getProfil(@GetRecruiter() recruiterId:Recruiter){        
        return recruiterId;
    }

    @Post('addjob')
    async addOffer(@Body() offerDto: OfferDTO ){
        this.recruiterService.createOffer(offerDto)
    }
}
