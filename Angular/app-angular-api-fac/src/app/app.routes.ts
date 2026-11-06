import { Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list-component/vehicle-list-component';
import { FilmListComponent } from './components/film-list-component/film-list-component';

export const routes: Routes = [
    { path: 'vehicle-list', component: VehicleListComponent },
    { path: 'film-list', component: FilmListComponent },
    { path: '', pathMatch: 'full', redirectTo: '/vehicle-list' }
];
