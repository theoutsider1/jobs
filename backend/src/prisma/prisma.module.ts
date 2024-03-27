import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { configDotenv } from 'dotenv';


@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
