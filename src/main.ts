import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사용 파이프를 만든다 .
  // 일반적으로 파이프는 미들웨어라고 할 수 있다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // NestJS는 Express.js 기 기본이기 때문에 Express.js middleware(pipe)를  추가할 수 있다.
  // 이를 이용해서 CORS(Cross-Origin Resource Sharing)를 활성화할 수 있다.
  // app.enableCors();

  // NestJS는 HTTP server를 Express.js로 바꿀 수 있다.
  // app.setGlobalPrefix('api');

  // NestJS는 HTTP server를 HTTPS로 바꿀 수 있다.
  // app.useGlobalPrefix('api');
  // app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
}

bootstrap();
