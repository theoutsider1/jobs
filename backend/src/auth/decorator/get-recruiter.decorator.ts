import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const GetRecruiter = createParamDecorator(
    (data: unknown , ctx: ExecutionContext) => {
  
        const request = ctx.switchToHttp().getRequest(); 
        // will get the request.user from the jwt.strategy 
        return request.user;
    },
);