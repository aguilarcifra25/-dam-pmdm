import { Component, inject } from '@angular/core';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';
import { EpisodeService } from '../../services/episode-service';
import { Episode } from '../../interfaces/episode-list-response';

// STEP2: generación de components ng g c components/....
@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent {
  // STEP5: declaración de la inyección de dependencia, es decir, la dependencia que
  // tengo de utilizar en este componente el EpisodeService.
  episodeService = inject(EpisodeService);
  episodeList: Episode[] = [];

  // STEP6: declaración del método que invoca la petición del servicio.
  loadEpisodeList() {
    this.episodeService.getAll().subscribe(resp => {
      console.log(resp);
      this.episodeList = resp.results;
    });
  }
}
