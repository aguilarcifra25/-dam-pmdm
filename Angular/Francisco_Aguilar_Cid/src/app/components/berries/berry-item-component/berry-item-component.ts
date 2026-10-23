import { Component, input } from '@angular/core';
import { Berry } from '../../../interfaces/berries/berry-list-response';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-berry-item-component',
  styleUrl: './berry-item-component.css',
  templateUrl: './berry-item-component.html',
})
export class BerryItemComponent {

  getId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }

  getImage(name: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${name}-berry.png`;
  }

  berry = input<Berry>()

}
