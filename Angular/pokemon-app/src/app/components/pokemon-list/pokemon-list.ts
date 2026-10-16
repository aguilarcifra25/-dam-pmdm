import { Component } from '@angular/core';
import { PokemonItem } from '../pokemon-item/pokemon-item';

const Dex: Pokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    photoURL: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/43/latest/20190406170624/Bulbasaur.png/800px-Bulbasaur.png",
    type1: "Grass",
    type2: "Poison",
    dexNumber: 1,
    height: 7,
    weight: 69
  },
  {
    id: 2,
    name: "Ivysaur",
    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHRKWPZ4bZ8SRZZRrzTY3S5UVxb1P5MdxbU46TA5ABQ&s",
    type1: "Grass",
    type2: "Poison",
    dexNumber: 0o2,
    height: 10,
    weight: 130
  },
  {
    id: 3,
    name: "Venusaur",
    photoURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png",
    type1: "Grass",
    type2: "Poison",
    dexNumber: 0o3,
    height: 20,
    weight: 1000
  },
];

@Component({
  imports: [PokemonItem],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {

  pokemonList = Dex

}
