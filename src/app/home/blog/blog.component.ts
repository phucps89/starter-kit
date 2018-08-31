import {Component, OnInit} from '@angular/core';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
declare var gnMenu: any;
declare var $: any;

@Component({
  selector: 'app-home-blog',
  templateUrl: './blog.component.html',
  styleUrls: [
    '../../../assets/juli/common-css/ionicons.css',
    '../../../assets/juli/common-css/01-homepage/css/styles.css',
    '../../../assets/juli/common-css/01-homepage/css/responsive.css',
  ]
})

export class BlogComponent implements OnInit {

  constructor(private http: HttpService, private script: ScriptService) {

  }

  ngOnInit() {
  }
}
