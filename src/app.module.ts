import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CatsModule} from './cats/cats.module';
import {LoggerMiddleware} from "./logger/logger.middleware";

//app.module.ts : 애플리케이션의 루트 모듈
@Module({
    imports: [CatsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        //cats 라우트에 LoggerMiddleware 미들웨어 적용
        //만약 (*)를 사용하면 모든 라우트에 적용
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('*');

    }
}
