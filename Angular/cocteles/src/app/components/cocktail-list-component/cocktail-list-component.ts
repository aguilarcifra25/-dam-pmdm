import { Component, inject, OnInit, signal } from '@angular/core';
import { CocktailService } from '../../services/cocktail-service';
import { Cocktail } from '../../interfaces/cocktail-list-response';
import { CocktailItemComponent } from '../cocktail-item-component/cocktail-item-component';

@Component({
  imports: [CocktailItemComponent],
  selector: 'app-cocktail-list-component',
  styleUrl: './cocktail-list-component.css',
  templateUrl: './cocktail-list-component.html',
})
export class CocktailListComponent implements OnInit {

  cocktailService = inject(CocktailService)

  cocktailList = signal<Cocktail[]>([]);

  ngOnInit(): void {
    this.cocktailService.getAllCocktails().subscribe(resp => {

      this.cocktailList.set(resp.drinks);
    });
  }

}
