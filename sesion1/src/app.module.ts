import { Module } from '@nestjs/common';
import {HelloWorldModule} from "./Hello world/helloworld.module";
import {MathModule} from "./Math/math.module";
import {MovieModule} from "./Movie/movie.module";
import {RandomModule} from "./RandomDog/random.module";

@Module({
  imports: [HelloWorldModule,MathModule,MovieModule,RandomModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
