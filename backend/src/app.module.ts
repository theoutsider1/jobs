import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RecruiterModule } from './recruiter/recruiter.module';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [AuthModule, RecruiterModule, CandidateModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
