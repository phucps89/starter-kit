import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Route, extract, AuthenticationGuard} from '@app/core';
import {AdminComponent} from '@app/admin/admin.component';
import {DashboardComponent} from '@app/admin/dashboard/dashboard.component';
import {AdminAuthGuard} from '@app/core/admin_auth/adminauth.guard';
import {CategoryListComponent} from '@app/admin/category/list/category.list.component';
import {CategoryCreateUpdateComponent} from '@app/admin/category/create_update/category.create.update.component';

const routes: Routes = [
  Route.withShell([
    // { path: 'admin/**', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard], children: [
        { path: '', component: DashboardComponent, data: { title: extract('Dashboard') } },
        { path: 'category', component: CategoryListComponent, data: { title: extract('Category list') } },
        { path: 'category/:id', component: CategoryCreateUpdateComponent, data: { title: extract('Category edit') } },
      ]},
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule {}
