import { Component, input, output } from '@angular/core';
import { Episode } from '../../interfaces/episode-list-response';

@Component({
  imports: [],
  selector: 'app-episode-item-component',
  styleUrl: './episode-item-component.css',
  templateUrl: './episode-item-component.html',
})
export class EpisodeItemComponent {

  episodeInput = input<Episode>()
  episodeClicked = output<string>()

  emitEpisodeClicked() {

    const id = this.episodeInput()?.id!

    this.episodeClicked.emit(id.toString())

  }


}
