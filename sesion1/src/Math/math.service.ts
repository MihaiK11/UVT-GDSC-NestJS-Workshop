import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
    getSum(a, b) {
        return a+b;
    }
    substract(a, b) {
        return a-b;
    }
    multiply(a, b) {
        return a*b;
    }
    divide(a, b) {
        return a/b;
    }

    calculate(operation, str) {
        let rez=0;
        let num = str.split(',');
        operation = decodeURIComponent(operation)
        switch (operation) {
            case '+':
                for (let i in num) {
                    rez += (+num[i]);
                }
                break;
            case '-':
                for (let i in num) {
                    rez -= (+num[i]);
                }
                break;
            case '/':
                for (let i in num) {
                    rez /= (+num[i]);
                }
                break;
            case '*':
                for (let i in num) {
                    rez *= (+num[i]);
                }
                break;
            default:
                rez =0;
        }
        return rez;
    }


}