import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JobOffer } from './candiatesInterfaces/jobOfferInterface';

@Injectable()
export class CandidateService {
    constructor(
        private prisma : PrismaService
    ){}

    async getLastJobs(){
        // retreive on the 6 newest job offers
        const lastOffers = await this.prisma.job.findMany({
            select: {
                title: true,
                createdAt: true,
                city: true,
                contractType: true,
                experience: true,
                // profil:true,
                companyName:true,
            },
            take: 6,
            orderBy: {
                createdAt: 'desc',
            }
        });
        
        return lastOffers;
        
    }

    async getSearchOffers() : Promise<Array<JobOffer>>{

        const jobOffers = await this.prisma.job.findMany({
            select: {
                id: true,
                title: true,
                createdAt: true,
                city: true,
                contractType: true,
                experience: true,
                domaine: true,
                jobType: true,
                // profil:true,
                companyName:true,
            }
        })
        return jobOffers;
    }
}
