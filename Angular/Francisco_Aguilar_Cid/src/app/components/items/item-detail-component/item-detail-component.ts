import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ItemService } from '../../../services/items/item-service';
import { ItemDetailResponse } from '../../../interfaces/items/item-detail-response';

@Component({
  imports: [],
  selector: 'app-item-detail-component',
  styleUrl: './item-detail-component.css',
  templateUrl: './item-detail-component.html',
})
export class ItemDetailComponent {
  private itemService = inject(ItemService);
  private route = inject(ActivatedRoute);

  item = toSignal(
    this.route.params.pipe(
      map((params) => params['id'] as string),
      switchMap((id) => this.itemService.getOneItem(id)),
    ),
  );

  description(item: ItemDetailResponse): string {
    return (
      item.effect_entries.find((e) => e.language.name === 'en')?.short_effect ??
      item.flavor_text_entries.find((f) => f.language.name === 'en')?.text ??
      ''
    );
  }
}