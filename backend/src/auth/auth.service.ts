import {Body, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, loginDto } from "./dto";
import * as bcrypt from "bcrypt";
import { error } from "node:console";
import { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";


@Injectable()
export class AuthService {
    constructor(private prisma : PrismaService){}

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
            console.log(recruiter)

             // return the saved user (Recruiter)
            return recruiter;
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
        
       
        try {
            const recruiter = await this.prisma.recruiter.findUnique({
                where: {
                    mail : loginDto.email
                }
            })
            // Email doesn't exist (Guard)
            if (!recruiter) {
                throw new ForbiddenException('Credentials incorrect')
            }

            // Compare password
            const isMatch = await bcrypt.compare(loginDto.password.toString() , recruiter.password)

            // Password doesn't exist (Guard)
            if (!isMatch) {
                throw new UnauthorizedException()
            }

            delete recruiter.password;

            // if the credentials are correct
            return recruiter
            

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
}