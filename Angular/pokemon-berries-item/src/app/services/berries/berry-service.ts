import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { BerryListResponse } from '../../interfaces/berries/berry-list-response';
import { BerryDetailResponse } from '../../interfaces/berries/berry-detail-response';

@Service()
export class BerryService {

    private http = inject(HttpClient);

    getAllBerries(): Observable<BerryListResponse> {
        return this.http.get<BerryListResponse>(`https://pokeapi.co/api/v2/berry/`);
    }

    getOneBerry(id: string): Observable<BerryDetailResponse> {
        return this.http.get<BerryDetailResponse>(`https://pokeapi.co/api/v2/berry/${id}`);

    }

}
