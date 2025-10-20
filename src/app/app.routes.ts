import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home').then(m => m.Home)
  },
  {
    path: 'programs',
    loadComponent: () =>
      import('./features/programs/programs').then(m => m.Programs)
  },
  {
    path: 'equipment',
    loadComponent: () =>
      import('./features/equipment/equipment').then(m => m.Equipment)
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./features/pricing/pricing').then(m => m.Pricing)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact').then(m => m.Contact)
  },

  { path: '**', redirectTo: 'home' }
];
