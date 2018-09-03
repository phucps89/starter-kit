import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
import {BrowserModule} from '@angular/platform-browser';
import {AdminComponent} from '@app/admin/admin.component';
import {AdminRoutingModule} from '@app/admin/admin-routing.module';
import {DashboardComponent} from '@app/admin/dashboard/dashboard.component';
import {AdminHttpService} from '@app/core/http/adminhttp.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AdminHttpErrorInterceptor} from '@app/core/http/adminhttperror.interceptor';
import {CategoryListComponent} from '@app/admin/category/list/category.list.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    AdminRoutingModule,
    BrowserModule,
    NgxDatatableModule,
  ],
  declarations: [
    AdminComponent,
    DashboardComponent,
    CategoryListComponent,
  ],
  providers: [
    HttpService, ScriptService, AdminHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminHttpErrorInterceptor,
      multi: true,
    }
  ]
})
export class AdminModule { }
