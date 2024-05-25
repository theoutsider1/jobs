import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({

    // only fields that we defined
    whitelist: true,
  }))
  app.enableCors(
   { origin: 'http://localhost:5173', // Replace with your frontend origin
     //methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
     credentials: true,}
  );
  await app.listen(3000);
}
bootstrap();
