import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, loginDto } from "./dto";




@Controller('espacerecruteurs')
export class AuthController {
    constructor (private authService : AuthService){}
   
    @HttpCode(HttpStatus.OK)
    @Post('signup')
    signup(@Body() dto : AuthDto){
       
       return this.authService.signup(dto);
    }


    @Post('login')
    logIn(@Body() loginDto : loginDto){
        return this.authService.logIn(loginDto);
    }
}