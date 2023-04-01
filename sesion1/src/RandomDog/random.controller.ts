import {Controller, Get, Query} from '@nestjs/common';
import {RandomService} from "./random.service";

@Controller('random')
export class RandomController {
    constructor(private readonly randomService: RandomService) {}

    @Get('/dog')
    getDog() {
        return this.randomService.getDog();
    }

}