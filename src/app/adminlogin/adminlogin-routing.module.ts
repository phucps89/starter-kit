import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { AdminloginComponent } from './adminlogin.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminloginComponent, data: { title: extract('Admin Login') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminloginRoutingModule { }
