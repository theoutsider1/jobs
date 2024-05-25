import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request, response } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
// This class has a specific use case which is 
//validating the (access token) 
export class jwtStrategy extends PassportStrategy(
    Strategy,
    'jwt',
    ){
    constructor(
        config: ConfigService,
        private prisma: PrismaService,) {

            super({
                jwtFromRequest: ExtractJwt.fromExtractors([
                    (request: Request) => {
                        return request?.cookies?.access_token;
                    }
                ]),
                secretOrKey: config.get<string>('JWT_SECRET'),
            });
        }
        
    async validate (payload : {sub: number, email: string}){

        const user =  await this.prisma.recruiter.findUnique({
            where: {
                id: payload.sub
            }
        });
        if (user) {
            
            delete user.password;
            return user;
        } else {
            
            throw new UnauthorizedException();
        }

    }
}