import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CandidateService {
    constructor(
        private prisma : PrismaService
    ){}

    async getLastJobs(){
        const lastOffers = await this.prisma.job.findMany({
            take: 6,
            orderBy: {
                createdAt: 'desc',
            }
        });
        
        return lastOffers;
        
    }
}
