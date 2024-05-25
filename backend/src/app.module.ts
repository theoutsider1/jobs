import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { CandidateModule } from './candidate/candidate.module';
import { PrismaModule } from './prisma/prisma.module';
import { SupabaseModule } from './supabase/supabase.module';

import  * as cookieParser  from 'cookie-parser';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    RecruiterModule,
    CandidateModule,
    PrismaModule,
    SupabaseModule ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  configure(cosumer: MiddlewareConsumer){
    cosumer.apply(cookieParser()).forRoutes('*');
  }
}
