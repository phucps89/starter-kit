import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {environment} from '@env/environment';
import {QuoteService} from './quote.service';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
declare var gnMenu: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    // '../../assets/go_menu/go_menu.scss',
    '../../assets/juli/common-css/bootstrap.css',
    '../../assets/juli/common-css/ionicons.css',
    '../../assets/juli/common-css/layerslider.css',
    '../../assets/juli/common-css/01-homepage/css/styles.css',
    '../../assets/juli/common-css/01-homepage/css/responsive.css',
    './home.component.scss',
  ]
})

export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;


  constructor(private http: HttpService, private script: ScriptService) {

  }

  ngOnInit() {
    this.isLoading = true;
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
    //   .subscribe((quote: string) => { this.quote = quote; console.log(quote) });
    this.script.load('fe_scripts').then(data => {
    }).catch(error => console.log(error));
  }

  getReference() {
    this.http.request('get', '/item/reference').subscribe((data: any) => {
      console.log(data);
    });
  }
}
