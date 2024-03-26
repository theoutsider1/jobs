import {Injectable } from "@nestjs/common";



@Injectable()
export class AuthService {

    signup() {
        return ' I\'m going forward';
    }

    signin() {
        return 'Here we go'
    }
}