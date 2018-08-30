import {Component, OnInit} from '@angular/core';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
declare var gnMenu: any;
declare var $: any;

@Component({
  selector: 'app-home-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    '../../../assets/juli/common-css/ionicons.css',
    '../../../assets/juli/common-css/04-Contact/css/styles.css',
    '../../../assets/juli/common-css/04-Contact/css/responsive.css',
  ]
})

export class ContactComponent implements OnInit {



  constructor(private http: HttpService, private script: ScriptService) {

  }

  ngOnInit() {
  }
}
