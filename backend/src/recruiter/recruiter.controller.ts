import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Recruiter } from '@prisma/client';
import { GetRecruiter } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';


@UseGuards(JwtGuard)
@Controller('recruteurs')
export class RecruiterController {

    @Get('profile')
    getProfil(@GetRecruiter('id') recruiterId:string){        
        return recruiterId;
    }
}
