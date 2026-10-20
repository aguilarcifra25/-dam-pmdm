import { inject, Service } from '@angular/core';
import { CocktailListResponse } from '../interfaces/cocktail-list-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Service()
export class CocktailService {

    private http = inject(HttpClient);

    getAllCocktails(): Observable<CocktailListResponse> {

        return this.http.get<CocktailListResponse>(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`);

    }
}