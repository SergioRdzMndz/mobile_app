import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
   {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },

   {
    path: 'category',
    loadComponent: () => import('./category/category.component').then((m) => m.CategoryComponent),
   },

  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then((m) => m.RegisterComponent),

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
