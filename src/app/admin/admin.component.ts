import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';

require('../../../node_modules/admin-lte/bower_components/jquery/dist/jquery.min.js');
require('../../../node_modules/admin-lte/bower_components/bootstrap/dist/js/bootstrap.min.js');
require('../../../node_modules/admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js');
require('../../../node_modules/admin-lte/bower_components/fastclick/lib/fastclick.js');
require('./adminlte.js');
require('../../../node_modules/admin-lte/dist/js/demo.js');

declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
    // '../../../node_modules/admin-lte/bower_components/Ionicons/css/ionicons.min.css',
    // '../../../node_modules/admin-lte/build/bootstrap-less/navbar.less',
    // '../../../node_modules/admin-lte/dist/css/AdminLTE.min.css',
    // '../../../node_modules/admin-lte/dist/css/skins/_all-skins.min.css',
    './admin.component.scss',
  ]
})

export class AdminComponent implements OnInit {

  categories: any[];

  constructor(private http: HttpService, private el: ElementRef) {
    // const body = document.getElementsByTagName('body')[0];
    // body.classList.add('hold-transition');
    // body.classList.add('skin-blue');
    // body.classList.add('fixed');
    // body.classList.add('sidebar-mini');
  }

  ngOnInit() {

    // remove class body
    // body.classList.remove("body-landing");
  }
}
