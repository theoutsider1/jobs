import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Prisma, PrismaClient, Recruiter } from '@prisma/client';
import * as bcrypt from "bcrypt";
import { ConfigService } from '@nestjs/config';


@Injectable()
export class RecruiterService {
    constructor (
        private prisma : PrismaService,
        private config: ConfigService){}

    async myprofile (myProfileDetails : Recruiter){
        return {"myProfileDetails" : myProfileDetails};
    }

    async createOffer(data : Prisma.JobCreateWithoutPublishedByInput, idRecuiter: any ) {
        const recruiterIdNumber: number = Number(idRecuiter);
        
        const { title, city, contractType, experience, domaine, companyName, description, jobType, missions,deadline,fonction,studiesRequirement ,profil, advantages } = data;
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
            deadline,
            fonction,
            studiesRequirement,
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
            },
            select: {
                id: true,
                createdAt: true,
                updatedAt: true,
                title: true,
                companyName: true,
                contractType: true,
                city: true,
                domaine: true,
                jobType: true,
                studiesRequirement: true,
                deadline: true,
                fonction : true,
                experience: true,
                description: true,
                missions: true,
                profil: true,
                advantages: true,
            }
        })

        try {
            // if job[] is empty 
            if(myAllJobOffers.length === 0 ){
                return {"msg" : "You didn't add any job offer yet"};
            } 

            // if not 
            return myAllJobOffers;

            
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                throw error.code
            } else {
                
                throw error
            }
        }
    }

    async removeOffer (jobId: number) {
        // search for the job
        const job = await this.prisma.job.findUnique({
            where: {
                id: jobId,
            }
        })
        try {
            
            // if the job doesn't exist
            if (!job){
                return {"Msg" : "This job doesn't exist"};
            }
            // if the job exists 
            if(job){
                await this.prisma.job.delete({
                    where:{
                        id : jobId,
                    }
                })
                return {"Msg" : "Job was deleted Successfully"};
            }

        } catch (error) {
            
        }
    }

    async getJobById(jobId: number){
        try {
            const job = await this.prisma.job.findUnique({
                where: {
                    id : jobId,
                } 
        })
            if (!job){
                return {"Msg" : "This job doesn't exist"}
            }

            if(job.appliedCandidateId === null){
                delete job.appliedCandidateId;
                return {job};
            }
            return {job};
            
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                throw error.code
            } else {
                
                throw error
            }
        }
    }

    async updateJobOffer(
        jobId : number,
        data : Prisma.JobUpdateWithoutPublishedByInput,
        recruiterId: number){            


            try {
                if (!recruiterId){
                    return ({"msg" : "You're not allowed"}) 
                }
                const findJobById = await this.prisma.job.findUnique({
                    where: {
                        id: jobId,
                    }
                })
                
                if (findJobById){
                    if (typeof data.deadline === 'string') {
                        data.deadline = new Date(data.deadline).toISOString();
                    }
                    const updatedJob =  await this.prisma.job.update({
                        where: {
                            id: jobId,}, data})
                        console.log(data);
                        
                        return updatedJob
                    }

                
            } catch (error) {
                if (error instanceof PrismaClientKnownRequestError){
                    throw error.code
                } else {
                    
                    throw error
                }
            }        
    }

    async updateRecruiterInfos(
        recuiterId : number,
        data: Prisma.RecruiterUpdateWithoutJobsInput) {
            const saltOrRounds = 10;
            const findRecuiter = await this.prisma.recruiter.findUnique({
                where:{
                    id: recuiterId,
                }
            })
           if('password' in data || 'email' in data){
            if (data.mail === findRecuiter.mail){
                return {"msg": "it seems like the old email"};
            } 

            if(data.password){
                const isMatch = await bcrypt.compare(data.password.toString(), findRecuiter.password)
                if (isMatch){
                    return {"msg": "it seems like the old email"};
                } else {
                    const newPassword = data.password.toString()
                    const hash = await bcrypt.hash(newPassword,saltOrRounds)

                     data.password = hash
                }
            }
           }
            try {
                    const updatedRecruiter = await this.prisma.recruiter.update({
                        where: {
                            id: recuiterId,
                        },data,
                    });
                    return updatedRecruiter;

                } catch (error) {
                    if (error instanceof PrismaClientKnownRequestError){
                        throw error.code
                    } else {
                        
                        throw error
                    }
            }
            
        }


}


