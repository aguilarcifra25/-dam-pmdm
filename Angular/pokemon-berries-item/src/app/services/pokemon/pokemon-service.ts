import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../../interfaces/pokemon/pokemon-list-response';
import { PokemonDetailResponse } from '../../interfaces/pokemon/pokemon-detail-response';

@Service()
export class PokemonService {

    private http = inject(HttpClient);

    getAllPokemon(): Observable<PokemonListResponse> {
        return this.http.get<PokemonListResponse>(`https://pokeapi.co/api/v2/pokemon/`);
    }

    getOnePokemon(id: string): Observable<PokemonDetailResponse> {
        return this.http.get<PokemonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);

    }

}
