import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('recruteurs')
export class RecruiterController {
    
    @UseGuards(JwtGuard)
    @Get('profile')

     getProfil(@Req() req){
        console.log(req.user);
        
        return req.user;
    }
}
