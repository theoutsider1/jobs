import { Controller, Get } from '@nestjs/common';
import { CandidateService } from './candidate.service';

@Controller('candidat')
export class CandidateController {

    constructor(
        private candidateService : CandidateService
    ){}


    @Get('trouverunemploi')
    async getAllJobOffers(){
        return {"msg" : "hello"};
    }

    @Get()
    async getLastJobOffers() {
        return this.candidateService.getLastJobs();
    }
}
