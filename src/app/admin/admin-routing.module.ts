import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Route, extract, AuthenticationGuard} from '@app/core';
import {AdminComponent} from '@app/admin/admin.component';

const routes: Routes = [
  Route.withShell([
    // { path: '', redirectTo: 'blog', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent, data: { title: extract('Admin') }},
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule {}
