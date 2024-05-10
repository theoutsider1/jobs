import { Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';
import { SupabaseService } from 'src/supabase/supabase.service';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService, SupabaseService]
})
export class CandidateModule {}
