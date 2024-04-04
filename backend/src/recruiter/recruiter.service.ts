import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class RecruiterService {
    constructor (
        private prisma : PrismaService,){}

    async createOffer(data : Prisma.JobCreateWithoutPublishedByInput, idRecuiter: any ) {
        const recruiterIdNumber: number = Number(idRecuiter);
        console.log(data);
        
        const { title, city, contractType, experience, domaine, companyName, description, jobType, missions, profil, advantages } = data;
        try {
        const job = await this.prisma.job.create({ data: {
            title,
            city,
            contractType,
            experience,
            domaine,
            companyName,
            description,
            jobType,
            missions,
            profil,
            advantages,
            appliedCandidateId: null,
            publishedById: recruiterIdNumber,
        
            } })

        return {"msg" : "Job was created successfully", data: job }

        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                throw error.code
            } else {
                
                throw error
            }
        }
    }

    async myJobOffers(recruiterId: number ) {
        // Get the job offers if there are any
        const myAllJobOffers = await this.prisma.job.findMany({
            where: {
                publishedById : recruiterId,
            }
        })

        try {
            // if job[] is empty 
            if(myAllJobOffers.length === 0 ){
                return {"msg" : "You didn't add any job offer yet"};
            } 
            
            // if not 
            return {"Your Job Offers" : myAllJobOffers}

            
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                throw error.code
            } else {
                
                throw error
            }
        }
    }
}


