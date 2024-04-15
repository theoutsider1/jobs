import { Controller, Get } from '@nestjs/common';
import { CandidateService } from './candidate.service';

@Controller('candidat')
export class CandidateController {

    constructor(
        private candidateService : CandidateService
    ){}

    // retreive on the 6 newest job offers
    @Get()
    async getLastJobOffers() {
        return await this.candidateService.getLastJobs();
    }

    @Get('trouverunemploi')
    async getAllJobOffers(){
        return await this.candidateService.getSearchOffers();
    }
    
}
