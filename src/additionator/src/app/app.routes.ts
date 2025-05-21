import { Routes } from '@angular/router';
import { AdditionatorPageComponent } from './additionator-page/additionator-page.component';
import { SumDisplayPageComponent } from './sum-display-page/sum-display-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/additionator', pathMatch: 'full' },
  { path: 'additionator', component: AdditionatorPageComponent },
  { path: 'sum-display', component: SumDisplayPageComponent },
  { path: '**', redirectTo: '/additionator' } // Wildcard route
];