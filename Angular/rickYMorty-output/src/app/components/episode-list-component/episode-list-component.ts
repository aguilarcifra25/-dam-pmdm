import { Component, inject, signal } from '@angular/core';
import { EpisodeService } from '../../services/episode-service';
import { Episode } from '../../interfaces/episode-list-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailComponent } from '../episode-detail-component/episode-detail-component';
import { EpisodeItemComponent } from '../episode-item-component/episode-item-component';

@Component({
  imports: [EpisodeItemComponent],
  selector: 'app-episode-list-component',
  styleUrl: './episode-list-component.css',
  templateUrl: './episode-list-component.html',
})
export class EpisodeListComponent {

  episodeService = inject(EpisodeService)
  episodeList = signal<Episode[]>([])

  private modalService = inject(NgbModal)

  ngOnInit(): void {

    this.episodeService.getAll().subscribe(resp => {

      this.episodeList.set(resp.results)

    })

  }

  openEpisodeModal(id: string) {

    this.episodeService.getOne(id).subscribe(resp => {

      const modalRef = this.modalService.open(EpisodeDetailComponent);
      modalRef.componentInstance.episodeDetail = resp;
    });

  }

}
