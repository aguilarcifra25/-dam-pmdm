import { Component, input } from '@angular/core';
import { Pokemon } from '../../../interfaces/pokemon/pokemon-list-response';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-pokemon-item-component',
  styleUrl: './pokemon-item-component.css',
  templateUrl: './pokemon-item-component.html',
})
export class PokemonItemComponent {

  getId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }

  getImage(url: string): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getId(url)}.png`;
  }

  pokemon = input<Pokemon>()

}
