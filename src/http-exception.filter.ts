import {ArgumentsHost, Catch, ExceptionFilter, HttpException} from "@nestjs/common";


@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        //실행환경
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        const error = exception.getResponse() as | string | { error: string, statusCode: number };

        if (typeof error === 'string') {
            //직접 만든 response인 경우
            response
                .status(status)
                .json({
                    success: false,
                    timestamp: new Date().toISOString(),
                    path: request.url,
                    error,
                });
        } else {
            //nest.js에서 제공하는 HttpException의 response인 경우
            response
                .status(status)
                .json({
                    success: false,
                    ...error,
                    timestamp: new Date().toISOString(),
                })
        }
    }
}