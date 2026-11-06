import { Component, input, output } from '@angular/core';
import { Film } from '../../interfaces/film-list-response';

@Component({
  imports: [],
  selector: 'app-film-item-component',
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {

  filmInput = input<Film>()
  filmClicked = output<string>()

  emitFilmCliked() {

    const id = this.filmInput()?.url.split('/')[5]!

    this.filmClicked.emit(id.toString())

  }

}
