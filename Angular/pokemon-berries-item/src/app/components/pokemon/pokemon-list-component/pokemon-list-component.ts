import { Component, inject, OnInit, signal } from '@angular/core';
import { PokemonService } from '../../../services/pokemon/pokemon-service';
import { Pokemon } from '../../../interfaces/pokemon/pokemon-list-response';
import { PokemonItemComponent } from '../pokemon-item-component/pokemon-item-component';

@Component({
  imports: [PokemonItemComponent],
  selector: 'app-pokemon-list-component',
  styleUrl: './pokemon-list-component.css',
  templateUrl: './pokemon-list-component.html',
})
export class PokemonListComponent implements OnInit {

  pokemonService = inject(PokemonService);
  pokemonList = signal<Pokemon[]>([]);

  getPokemonId(url: string): string {
    return url.split('/').filter(Boolean).pop()!;
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(resp => {

      this.pokemonList.set(resp.results);
    });
  }

}
