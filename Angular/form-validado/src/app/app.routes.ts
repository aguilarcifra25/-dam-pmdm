import { Routes } from '@angular/router';
import { RegisterFormPage } from './pages/register-form-page/register-form-page';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: RegisterFormPage },
];
