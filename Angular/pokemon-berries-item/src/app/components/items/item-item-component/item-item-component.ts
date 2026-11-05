import { Component, input } from '@angular/core';
import { Item } from '../../../interfaces/items/item-list-response';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-item-item-component',
  styleUrl: './item-item-component.css',
  templateUrl: './item-item-component.html',
})
export class ItemItemComponent {

  getId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }

  getImage(name: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}.png`;
  }

  item = input<Item>()

}
