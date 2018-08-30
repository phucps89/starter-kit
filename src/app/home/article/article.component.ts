import {Component, OnInit} from '@angular/core';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
declare var gnMenu: any;
declare var $: any;

@Component({
  selector: 'app-home-article',
  templateUrl: './article.component.html',
  styleUrls: [
    '../../../assets/juli/common-css/ionicons.css',
    '../../../assets/juli/common-css/02-Single-post/css/styles.css',
    '../../../assets/juli/common-css/02-Single-post/css/responsive.css',
  ]
})

export class ArticleComponent implements OnInit {



  constructor(private http: HttpService, private script: ScriptService) {

  }

  ngOnInit() {
  }
}
