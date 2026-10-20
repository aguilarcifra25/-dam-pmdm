import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeListResponse } from '../interfaces/episode-list-response';

// STEP4: crear el servicio que hará la petición sobre los episodios
@Service()
export class EpisodeService {
    http = inject(HttpClient);

    getAll(): Observable<EpisodeListResponse> {
        return this.http.get<EpisodeListResponse>('https://rickandmortyapi.com/api/episode');
    }
}
