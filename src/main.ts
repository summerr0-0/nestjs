import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {HttpExceptionFilter} from "./http-exception.filter";

//main.ts : 애플리케이션의 진입점, NestFactory를 사용하여 애플리케이션을 생성하고 시작
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(8000);
}
bootstrap();
