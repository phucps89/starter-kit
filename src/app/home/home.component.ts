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
    '../../assets/go_menu/go_menu.scss',
    './home.component.scss',
  ]
})

export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;


  constructor(private http: HttpService, private script: ScriptService) {
    this.script.load('go_menu').then(data => {
      console.log('script loaded ', data);
      new gnMenu( document.getElementById( 'gn-menu' ) );
    }).catch(error => console.log(error));
  }

  ngOnInit() {
    this.isLoading = true;
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
    //   .subscribe((quote: string) => { this.quote = quote; console.log(quote) });

  }

  getReference() {
    this.http.request('get', '/item/reference').subscribe((data: any) => {
      console.log(data);
    });
  }
}
