import { Global, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
@Global()
@Injectable()
export class SupabaseService {
    private readonly supabase: SupabaseClient;
    constructor ( config : ConfigService){

        // Initialize Supabase client with appropriate configuration
        this.supabase = createClient(config.get('SUPABASE_URL'), config.get('SUPABASE_KEY'));
    }

    async uploadFile(file: Express.Multer.File) {
        try {
          const { data, error } = await this.supabase.storage
            .from('inptcvs') // Replace 'bucket_name' with your Supabase bucket name
            .upload(file.originalname, file.buffer); // Assuming file.buffer contains file data
            //console.log(file.buffer)
            
          return { data, error };
        } catch (error) {
          console.error('Error uploading file to Supabase:', error);
          throw new Error('Failed to upload file to Supabase');
        }
      }
}
