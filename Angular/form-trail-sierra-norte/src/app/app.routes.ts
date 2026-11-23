import { Routes } from '@angular/router';
import { RegisterForm } from './pages/register-form/register-form';
import { NotFoundPage } from './pages/not-found-page/not-found-page';
import { ConfirmationPage } from './pages/confirmation-page/confirmation-page';

export const routes: Routes = [

    { path: 'inscripcion', component: RegisterForm },
    { path: 'confirmacion', component: ConfirmationPage },
    { path: '', pathMatch: 'full', redirectTo: '/incripcion' },
    { path: '**', component: NotFoundPage }
];
