import { Routes } from '@angular/router';
import { Formpage } from './pages/formpage/formpage';
import { Notfoundpage } from './pages/notfoundpage/notfoundpage';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: Formpage },
    { path: '**', component: Notfoundpage }
];
