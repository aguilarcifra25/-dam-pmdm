import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemListResponse } from '../../interfaces/items/item-list-response';
import { ItemDetailResponse } from '../../interfaces/items/item-detail-response';

@Service()
export class ItemService {

    private http = inject(HttpClient);

    getAllItems(): Observable<ItemListResponse> {
        return this.http.get<ItemListResponse>(`https://pokeapi.co/api/v2/item/`);
    }

    getOneItem(id: string): Observable<ItemDetailResponse> {
        return this.http.get<ItemDetailResponse>(`https://pokeapi.co/api/v2/item/${id}`);

    }

}
