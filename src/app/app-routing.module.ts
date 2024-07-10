import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'accessdenied',
    loadChildren: () => import('./accessdenied/accessdenied.module').then( m => m.AccessdeniedPageModule)
  },
  {
    path: 'errorpage',
    loadChildren: () => import('./errorpage/errorpage.module').then( m => m.ErrorpagePageModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customer/customer.module').then( m => m.CustomerPageModule)
  },
  {
    path: 'ordre',
    loadChildren: () => import('./ordre/ordre.module').then( m => m.OrdrePageModule)
  },
  {
    path: 'list-customer',
    loadChildren: () => import('./list-customer/list-customer.module').then( m => m.ListCustomerPageModule)
  },
  {
    path: 'list-ordre',
    loadChildren: () => import('./list-ordre/list-ordre.module').then( m => m.ListOrdrePageModule)
  },
  {
    path: 'showcustomer/:id',
    loadChildren: () => import('./showcustomer/showcustomer.module').then( m => m.ShowcustomerPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
