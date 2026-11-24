import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularMoviesPage } from './components/popular-movies-page/popular-movies-page';

@Component({
  imports: [RouterOutlet, PopularMoviesPage],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('popular-movies');
}
