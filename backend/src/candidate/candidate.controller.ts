import { Controller, Get, Query } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { JobOffer } from './candiatesInterfaces/jobOfferInterface';

@Controller('candidat')
export class CandidateController {

    constructor(
        private candidateService : CandidateService
    ){}

    // retreive on the 6 newest job offers
    @Get()
     getLastJobOffers() {
        return  this.candidateService.getLastJobs();
    }

    @Get('trouverunemploi')
    async getAllJobOffers(@Query() query:JobOffer){
        return await this.candidateService.getSearchOffers();
    }
    
}
