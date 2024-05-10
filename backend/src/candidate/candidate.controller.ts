import { Controller, Get, Param, ParseIntPipe, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { JobOffer } from './candiatesInterfaces/jobOfferInterface';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('candidat')
export class CandidateController {

    constructor(
        private candidateService : CandidateService,
    ){}

    // retreive on the 6 newest job offers
    @Get()
     getLastJobOffers() {
        return  this.candidateService.getLastJobs();
    }

    @Get('trouverunemploi')
    async getAllJobOffers(@Query() query : string): Promise<JobOffer[]>{
        return await this.candidateService.getSearchOffers();
    }
    @Get('/description/:id')
    async jobDetails(@Param('id', ParseIntPipe) id : number){
    
        return await this.candidateService.getOfferDetails(id);
    }

    @Post('postuler/cv/:id')
    @UseInterceptors(FileInterceptor('file'))
    async handleUploadCv (@UploadedFile() file : Express.Multer.File ,@Param('id', ParseIntPipe) jobId : number) {

        return await this.candidateService.handleUploadFile(file , jobId);
    }



    
}
