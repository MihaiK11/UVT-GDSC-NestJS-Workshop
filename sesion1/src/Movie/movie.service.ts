import { Injectable } from '@nestjs/common';

@Injectable()
export class MovieService {
    movie = [{
        id:1,
        title:"The Matrix",
        ImbdRating : 8.1,
    },
        {
            id:2,
            title:"The Avengers",
            ImbdRating : 8.1,
        },
        {
            id:3,
            title:"Home Alone",
            ImbdRating : 8.1,
        },
    ]
    getMovies(){
        return this.movie.map(a => ({title: a.title, id: a.id}))
    }
    sortMovies(sort){
        let movie = this.movie
        if (sort){
            if (sort == 'cres'){
                movie.sort()
            }
            if (sort == 'desc'){
                movie.reverse()
            }
        }
        return movie

    }
}