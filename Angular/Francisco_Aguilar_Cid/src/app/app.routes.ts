import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon/pokemon-list-component/pokemon-list-component';
import { PokemonDetailComponent } from './components/pokemon/pokemon-detail-component/pokemon-detail-component';
import { NotFound } from './pages/not-found/not-found';
import { BerryListComponent } from './components/berries/berry-list-component/berry-list-component';
import { BerryDetailComponent } from './components/berries/berry-detail-component/berry-detail-component';
import { ItemListComponent } from './components/items/item-list-component/item-list-component';
import { ItemDetailComponent } from './components/items/item-detail-component/item-detail-component';

export const routes: Routes = [
    { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
    { path: 'berry-detail/:id', component: BerryDetailComponent },
    { path: 'item-detail/:id', component: ItemDetailComponent },
    { path: 'pokemon-list', component: PokemonListComponent },
    { path: 'berry-list', component: BerryListComponent },
    { path: 'item-list', component: ItemListComponent },
    { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
    { path: '**', component: NotFound },

];
