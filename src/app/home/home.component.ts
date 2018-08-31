///<reference path="../../../node_modules/@types/node/index.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';

// @import '~bootstrap/scss/bootstrap';
require('../../assets/juli/common-js/scripts.js');

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    // '../../../node_modules/bootstrap/scss/bootstrap.scss',
    // '../../../node_modules/admin-lte/bower_components/bootstrap/dist/css/bootstrap.css',
    '../../assets/juli/common-css/ionicons.css',
    '../../assets/juli/common-css/01-homepage/css/styles.css',
    '../../assets/juli/common-css/01-homepage/css/responsive.css',
    './home.component.scss',
  ]
})

export class HomeComponent implements OnInit {

  categories: any[];

  constructor(private http: HttpService, private script: ScriptService) {

  }

  ngOnInit() {
    // this.script.load('fe_scripts').then(data => {
    // }).catch(error => console.log(error));

    this.http.get('/reference').subscribe((res: any) => {
      this.categories = res.data.categories;
      console.log(this.categories);
    });
  }
}
