import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('recruteurs')
export class RecruiterController {
    
    @UseGuards(AuthGuard('jwt'))
    @Get('profile')

     getProfil(@Req() req){
        console.log(req.user);
        
        return req.user;
    }
}
