import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'programs',
    loadComponent: () =>
      import('./features/programs/programs.component').then(m => m.ProgramsComponent)
  },
  {
    path: 'equipment',
    loadComponent: () =>
      import('./features/equipment/equipment.component').then(m => m.EquipmentComponent)
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./features/pricing/pricing.component').then(m => m.PricingComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(m => m.ContactComponent)
  },

  { path: '**', redirectTo: 'home' }
];
