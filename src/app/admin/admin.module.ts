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

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    AdminRoutingModule,
    BrowserModule,
  ],
  declarations: [
    AdminComponent
  ],
  providers: [
    HttpService, ScriptService
  ]
})
export class AdminModule { }
