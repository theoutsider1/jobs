import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtStrategy } from "./strategy";

@Module({
    imports:[JwtModule.register({})],
    controllers: [AuthController],
    providers : [AuthService,jwtStrategy],
})
export class AuthModule {}
    