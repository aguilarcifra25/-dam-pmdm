import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmDetailResponse } from '../../interfaces/film-detail-response';

@Component({
  imports: [],
  selector: 'app-film-detail-component',
  styleUrl: './film-detail-component.css',
  templateUrl: './film-detail-component.html',
})
export class FilmDetailComponent {

  activeModal = inject(NgbActiveModal);

  @Input() filmDetail: FilmDetailResponse | undefined;

}
