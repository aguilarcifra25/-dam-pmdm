import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../services/film-service';
import { Film } from '../../interfaces/film-list-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmDetailComponent } from '../film-detail-component/film-detail-component';
import { FilmItemComponent } from '../film-item-component/film-item-component';

@Component({
  imports: [FilmItemComponent],
  selector: 'app-film-list-component',
  styleUrl: './film-list-component.css',
  templateUrl: './film-list-component.html',
})
export class FilmListComponent implements OnInit {

  filmService = inject(FilmService)

  filmList = signal<Film[]>([])

  private modalService = inject(NgbModal)

  ngOnInit(): void {

    this.filmService.getAllFilm().subscribe(resp => {

      this.filmList.set(resp.results)

    })

  }

  openFilmModal(id: string) {

    this.filmService.getOneFilm(id).subscribe(resp => {

      const modalRef = this.modalService.open(FilmDetailComponent);
      modalRef.componentInstance.vehicleDetail = resp;
    });

  }

}
