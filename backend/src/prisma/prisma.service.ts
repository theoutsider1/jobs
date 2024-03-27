import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor (){
        super({
           datasources: {
            db:{
                url: "postgres://postgres.ibgqqpupehdmkxqtwfqf:84S&6nM$EM%eiZ6@aws-0-eu-west-2.pooler.supabase.com:5432/postgres"
            }
           }
        })
        
    }
}
