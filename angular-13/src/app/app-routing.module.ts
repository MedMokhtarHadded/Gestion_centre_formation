import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactureComponent } from './facture/facture.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './core/guards/auth-guard/auth-guard.guard';

export const Approutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  {       path: 'facture/:id/:affectedFormation',component:FactureComponent     },
  {       path: 'reset-password/:id/:token',component: ResetpasswordComponent   },
      {       path: 'login',component:LoginComponent     },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' 
    },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule ) 
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
