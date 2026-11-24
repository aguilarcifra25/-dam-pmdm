import { Component, inject, signal } from '@angular/core';
import { MoviesService } from '../../services/movies-service';
import { Movie } from '../../interfaces/movies-list-response';
import { PopularMoviesItem } from '../popular-movies-item/popular-movies-item';

@Component({
  imports: [PopularMoviesItem],
  selector: 'app-popular-movies-page',
  styleUrl: './popular-movies-page.css',
  templateUrl: './popular-movies-page.html',
})
export class PopularMoviesPage {

  private movieService = inject(MoviesService);
  movieList = signal<Movie[]>([]);

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(resp => {
      this.movieList.set(resp.results);
    });
  }

}
