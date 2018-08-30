import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
import {BlogComponent} from '@app/home/blog/blog.component';
import {ArticleComponent} from '@app/home/article/article.component';
import {ContactComponent} from '@app/home/contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    BlogComponent,
    ArticleComponent,
    ContactComponent,
  ],
  providers: [
    QuoteService, HttpService, ScriptService
  ]
})
export class HomeModule { }
