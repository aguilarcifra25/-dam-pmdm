import { Component, inject, signal } from '@angular/core';
import { ItemService } from '../../../services/items/item-service';
import { Item } from '../../../interfaces/items/item-list-response';
import { ItemItemComponent } from '../item-item-component/item-item-component';

@Component({
  imports: [ItemItemComponent],
  selector: 'app-item-list-component',
  styleUrl: './item-list-component.css',
  templateUrl: './item-list-component.html',
})
export class ItemListComponent {

  itemService = inject(ItemService);
  itemList = signal<Item[]>([]);

  getItemId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(resp => {

      this.itemList.set(resp.results);
    });
  }

}
