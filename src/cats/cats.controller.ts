import {
    Controller,
    Delete,
    Get,
    HttpException,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Put,
    UseFilters
} from '@nestjs/common';
import {CatsService} from "./cats.service";
import {HttpExceptionFilter} from "../http-exception.filter";

@Controller('cats')
@UseFilters(HttpExceptionFilter) //에러필터
export class CatsController {
    //catsService 의존성 주입 DI
    constructor(private readonly catsService: CatsService){}

    @Get()
    getAllCat() {
        // throw new HttpException('api broken', 401);
        return 'all cats';
    }

    @Get(':id')
    getOneCat(@Param('id', ParseIntPipe) param: number) {
        //parseintpipe를 사용하여 number로 변환
        console.log(param);
        console.log(typeof param);
        return 'one cat';
    }

    @Post()
    createCat() {
        return 'create cat';
    }

    @Put(':id')
    updateCat() {
        return 'update cat';
    }

    @Patch(':id')
    updatePartialCat() {
        return 'update partial cat';
    }

    @Delete(':id')
    deleteCat() {
        return 'delete cat';
    }
}

