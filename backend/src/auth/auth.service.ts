import {ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, loginDto } from "./dto";
import * as bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
// import { response } from "express";



@Injectable()
export class AuthService {
    constructor(
        private prisma : PrismaService,
        private jwtService: JwtService,
        private config: ConfigService){}
        

    async signup(dto : AuthDto) {
        
        const saltOrRounds = 10;

        // genreate the password hash 
        const hash = await bcrypt.hash(dto.password, saltOrRounds );

        // save the new user in the db 
        try{
            
            const recruiter = await this.prisma.recruiter.create({
                data: {
                    fullName: dto.fullName,
                    mail: dto.email,
                    phone_number: dto.phoneNumber,
                    password : hash,
                    
                }
            })
             // return the saved user (Recruiter)
            return this.signToken(recruiter.id , recruiter.mail , 'recruiter');

        }catch(error){
             
            if (error instanceof Prisma.PrismaClientKnownRequestError){
                if (error.code === 'P2002'){
                    // Unique constraint violation error
                    throw new ForbiddenException('Credentials taken');
                }
            }else {    
                 // Other types of errors
                throw error;
            }
        }
 }
                

    async logIn(loginDto : loginDto ) {
        
        
        // Email doesn't exist 
        // if (!recruiter) {
        //     throw new ForbiddenException('Credentials incorrect')
        // }
        
        try {
            const recruiter = await this.prisma.recruiter.findUnique({
                where: {
                    mail : loginDto.email
                }
            })
            if (recruiter){
                 // Compare password
                const isMatch = await bcrypt.compare(loginDto.password.toString() , recruiter.password)

                // Password doesn't exist 
                if (!isMatch) {
                    throw new UnauthorizedException()
                }

                return this.signToken(recruiter.id, recruiter.mail, 'recruiter');
            } else if (!recruiter){
                const candidate = await this.prisma.candidate.findUnique({
                    where : {
                        mail:loginDto.email
                    }
                })
                const isMatch = await bcrypt.compare(loginDto.password.toString() , candidate.password)

                // Password doesn't exist 
                if (!isMatch) {
                    throw new UnauthorizedException()
                }
                return this.signToken(candidate.id, candidate.mail , 'candidate');
            }
            

            
               
           
            // if(recruiter){
               
            // } else if (candidat){
            //     return this.signToken(candidat.id, recruiter.mail);
            // }
            // if the credentials are correct
           

       } catch (error) {
            if (error instanceof PrismaClientKnownRequestError){
                if (error.code === 'P2002'){
                    // Unique constraint violation error
                    throw new Error ('Email or phone number already exists')
                } 
            } else {
                throw error
            }
       } 
  
    }

    async signToken(recruiterId: number, email : string , role : string
        ) : Promise<string> {

            
            const payload = {
                sub: recruiterId,
                email,
                role: role
            } ;

            const secret = this.config.get('JWT_SECRET');
            const token = await this.jwtService.signAsync(
                payload,
                {
                    expiresIn : '6h',
                    secret:secret
                })
            return token
            
        }
}