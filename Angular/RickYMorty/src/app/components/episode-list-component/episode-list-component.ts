import { Component, inject } from '@angular/core';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';
import { EpisodeService } from '../../services/episode-service';
import { Episode } from '../../interfaces/episode-list-response';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent {

  episodeService = inject(EpisodeService)

  episodeList: Episode[] = []


  loadEpisodeList() {
    this.episodeService.getAll().subscribe(resp => {

      this.episodeList = resp.results;

    })
  }

}
