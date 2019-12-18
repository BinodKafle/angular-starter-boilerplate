import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlankComponent} from './shared/layouts/blank/blank.component';
import {FullComponent} from './shared/layouts/full/full.component';


const routes: Routes = [
  {
    path: '',
    component: BlankComponent,
    children: [
      { path: '', loadChildren: './views/login/login.module#LoginModule' },
    ]
  },
  {
    path: '',
    component: FullComponent,
    resolve: {},
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        canActivate: []
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
