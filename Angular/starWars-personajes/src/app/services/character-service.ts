import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListResponse } from '../interfaces/character-list-response';
import { CharacterDetailResponse } from '../interfaces/character-detail-response';

@Service()
export class CharacterService {

    http = inject(HttpClient)

    getAllCharacter(): Observable<CharacterListResponse> {

        return this.http.get<CharacterListResponse>('https://swapi.dev/api/people/')

    }

    getOneCharacter(id: string): Observable<CharacterDetailResponse> {

        return this.http.get<CharacterDetailResponse>(`https://swapi.dev/api/people/${id}`)

    }

}
