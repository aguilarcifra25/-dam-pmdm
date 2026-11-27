import { Component, computed, inject } from '@angular/core';
import { MoviesService } from '../../services/movies-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

@Component({
  imports: [NgxChartsModule],
  selector: 'app-value-chart-component',
  styleUrl: './value-chart-component.css',
  templateUrl: './value-chart-component.html',
})
export class ValueChartComponent {

  private readonly moviesService = inject(MoviesService);

  // Top 10 películas populares -> [{ name, value }]
  private readonly movies = toSignal(
    this.moviesService.getPopularMovies().pipe(
      map((res) =>
        res.results.slice(0, 10).map((m) => ({
          name: m.title,
          value: Number(m.vote_average.toFixed(1)),
        }))
      )
    ),
    { initialValue: [] }
  );

  readonly data = computed(() => this.movies());

  readonly colorScheme: Color = {
    name: 'tmdb',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#01b4e4', '#90cea1', '#0d253f', '#f5c518', '#e50914'],
  };

}
