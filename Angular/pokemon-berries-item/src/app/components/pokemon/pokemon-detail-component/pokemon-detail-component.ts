import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { PokemonService } from '../../../services/pokemon/pokemon-service';

@Component({
  imports: [],
  selector: 'app-pokemon-detail-component',
  styleUrl: './pokemon-detail-component.css',
  templateUrl: './pokemon-detail-component.html',
})
export class PokemonDetailComponent {
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);

  pokemon = toSignal(
    this.route.params.pipe(
      map((params) => params['id'] as string),
      switchMap((id) => this.pokemonService.getOnePokemon(id)),
    ),
  );
}