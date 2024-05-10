import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JobOffer, offerEmploi } from './candiatesInterfaces/jobOfferInterface';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { SupabaseService } from 'src/supabase/supabase.service';
import { Prisma } from '@prisma/client';
import { extname } from 'node:path';

@Injectable()
export class CandidateService {
    constructor(
        private prisma : PrismaService,
        private supabaseService : SupabaseService
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

    async getOfferDetails (id : number): Promise <offerEmploi | { error: string }>  {
    
        
        try {
            const jobInfos = await this.prisma.job.findUnique({
                where: {
                    id: id,
                },
                select : {
                    id: true,
                    createdAt : true,
                    title: true,
                    city: true,
                    contractType: true,
                    experience: true,
                    domaine: true,
                    companyName: true,
                    description: true,
                    jobType: true,
                    missions: true,
                    profil: true,
                    advantages: true,

                }
            });
    
            if (!jobInfos) {
                return { error: 'Job not found' }; // Return custom error message
            }
    
            // If jobInfos is not empty, return the job details
            return jobInfos;
        } catch (error) {
            console.error('Error fetching job details:', error);
            return { error: 'Internal server error' }; // Return generic error message
        }
    }


    // Upload file service 

    async handleUploadFile(file , jobId){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const cvName: string = `${uniqueSuffix}${ext}`
        try {
            const {data , error} = await this.supabaseService.uploadFile(file);
            console.log(file)
           
            console.log(cvName)
            
            // Save the file to Supabase
            if(error) {
                throw new Error (error.message);
            }
            // Save file metadata to your database using Prisma
            console.log('supabase passed',file)
            const savedFile = await this.prisma.cvsFile.create({
                data: {
                  filename:cvName,
                  url: data.path, // assuming Supabase returns URL
                  // Add other metadata if needed
                  size: file.size,
                   // Associate the file with the relevant job
                job: { connect: { id: jobId } }
            } as Prisma.CvsFileCreateInput, 
              });
              
              return savedFile;
            } catch (dbError) {
                // Handle database constraint violation
                if (dbError.code === '23505') { // Unique constraint violation error code
                    console.error('Filename already exists:', cvName);
                    // Retry with a new filename or handle the error as needed
                    throw new Error('Filename already exists');
                } else {
                    throw dbError; // Rethrow other database errors
                }
            }
        } catch (error) {
            console.error('Error uploading PDF:', error);
            throw new Error('Failed to upload PDF');
        }
    
}
