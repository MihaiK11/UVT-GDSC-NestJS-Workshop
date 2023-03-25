import {Controller, Get, Param} from '@nestjs/common';
import {MathService} from "./math.service";

@Controller('math')
export class MathController {
    constructor(private readonly mathService: MathService) {}
    @Get('/sum/:a/:b')
    getSum(@Param('a') a,@Param('b') b) {
        return this.mathService.getSum(+a, +b);
    }
    @Get('/subs/:a/:b')
    Substract(@Param('a') a,@Param('b') b) {
        return this.mathService.substract(+a, +b);
    }

    @Get('/mult/:a/:b')
    Multiply(@Param('a') a,@Param('b') b) {
        return this.mathService.multiply(+a, +b);
    }
    @Get('/div/:a/:b')
    Divide(@Param('a') a,@Param('b') b) {
        return this.mathService.divide(+a, +b);
    }
    @Get('/calc/:operation/:string')
    Calculator(@Param('operation') operation,@Param('string') string) {
        return this.mathService.calculate(operation, string);
    }
}