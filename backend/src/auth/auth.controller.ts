import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, loginDto } from "./dto";




@Controller('recruteur')
export class AuthController {
    constructor (private authService : AuthService){}
   
   
    @Post('signup')
    signup(@Body() dto : AuthDto){
       
       return this.authService.signup(dto);
    }


    @Post('login')
    logIn(@Body() loginDto : loginDto){
        return this.authService.logIn(loginDto);
    }
}