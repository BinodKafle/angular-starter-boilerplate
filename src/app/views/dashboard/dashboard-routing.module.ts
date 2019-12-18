import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard/admin', pathMatch: 'full'},
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
