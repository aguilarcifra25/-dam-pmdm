import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularMoviesPage } from './components/popular-movies-page/popular-movies-page';
import { ValueChartComponent } from './components/value-chart-component/value-chart-component';

@Component({
  imports: [RouterOutlet, PopularMoviesPage, ValueChartComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('popular-movies');
}
