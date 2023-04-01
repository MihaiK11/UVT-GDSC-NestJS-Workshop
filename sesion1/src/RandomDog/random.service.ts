import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomService {
    getDog(){

        let response = fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((response) => response["message"])
        return response
    }
}