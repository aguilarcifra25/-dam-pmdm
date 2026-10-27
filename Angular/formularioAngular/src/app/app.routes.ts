import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { RegisterForm } from './components/register-form/register-form';

export const routes: Routes = [
    { path: 'formulario', component: RegisterForm },
    { path: '', pathMatch: 'full', redirectTo: '/formulario' },
    { path: '**', component: NotFoundPage }
];
