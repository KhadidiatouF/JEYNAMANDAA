import { Routes } from '@angular/router';
import { CollectionsPage } from './components/collections-page/collections-page';
import { HomePage } from './app';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'collections', component: CollectionsPage },
  { path: '**', redirectTo: '' },
];