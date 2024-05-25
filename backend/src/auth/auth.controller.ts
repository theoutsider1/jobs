import { Body, Controller, HttpCode, HttpStatus, Post, Res, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, loginDto } from "./dto";
import { Response } from "express";





@Controller('espacerecruteurs')
export class AuthController {
    constructor (private authService : AuthService){}
   
    @HttpCode(HttpStatus.OK)
     @Post('signup')
     async signup(@Body() dto : AuthDto, @Res() response : Response){
        
        await this.authService.signup(dto);
       
        return { message: 'Login Successfully' };
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
     async logIn(@Body() loginDto : loginDto, @Res()response : Response){
        
        try {      
            const token =  await  this.authService.logIn(loginDto);
            response.cookie('access_token', token, {
                httpOnly: true,
                //secure: true,
            })
            
            return response.status(HttpStatus.OK).json({ message: 'Login Successfully' });
            
        } catch (error) {
            
            // Handle errors here
            if (error instanceof UnauthorizedException) {
                // Handle unauthorized error
                return response.status(HttpStatus.UNAUTHORIZED).send({ message: 'Unauthorized' });
            } else {
            
                // Handle other errors
                return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
            }
        }
    }
}
            
                
            
        