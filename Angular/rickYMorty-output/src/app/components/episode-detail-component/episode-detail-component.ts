import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailResponse } from '../../interfaces/episode-detail-response';

@Component({
  imports: [],
  selector: 'app-episode-detail-component',
  styleUrl: './episode-detail-component.css',
  templateUrl: './episode-detail-component.html',
})
export class EpisodeDetailComponent {

  activeModal = inject(NgbActiveModal);

  @Input() episodeDetail: EpisodeDetailResponse | undefined;

}
