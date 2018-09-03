import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminloginRoutingModule } from './adminlogin-routing.module';
import { AdminloginComponent } from './adminlogin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    NgbModule,
    AdminloginRoutingModule
  ],
  declarations: [
    AdminloginComponent
  ]
})
export class AdminloginModule { }
