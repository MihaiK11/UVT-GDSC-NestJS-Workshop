import { Controller, Get } from '@nestjs/common';
import {HelloWorldService} from "./helloworld.service";

@Controller('hello-world')
export class HelloWorldController {
    constructor(private readonly helloWorldService: HelloWorldService) {}

    @Get()
    getHello(): string {
        return this.helloWorldService.getHello();
    }
}