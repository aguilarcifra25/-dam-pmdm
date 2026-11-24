import { Component, input } from '@angular/core';
import { Movie } from '../../interfaces/movies-list-response';

@Component({
  imports: [],
  selector: 'app-popular-movies-item',
  styleUrl: './popular-movies-item.css',
  templateUrl: './popular-movies-item.html',
})
export class PopularMoviesItem {

  movie = input<Movie | undefined>();

  getId() {
    return this.movie();
  }

}
