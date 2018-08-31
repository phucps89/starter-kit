import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Route, extract, AuthenticationGuard} from '@app/core';
import { HomeComponent } from './home.component';
import {BlogComponent} from '@app/home/blog/blog.component';
import {ArticleComponent} from '@app/home/article/article.component';
import {ContactComponent} from '@app/home/contact/contact.component';

const routes: Routes = [
  Route.withShell([
    // { path: '', redirectTo: 'blog', pathMatch: 'full' },
    { path: '', component: HomeComponent, children: [
        { path: '', component: BlogComponent, data: { title: extract('Home') } },
        { path: 'article', component: ArticleComponent, data: { title: extract('Article') } },
        { path: 'contact', component: ContactComponent, data: { title: extract('Contact') } },
      ] },
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
