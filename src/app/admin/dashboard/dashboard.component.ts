import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
import {AdminHttpService} from '@app/core/http/adminhttp.service';
import {ToastrService} from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    '../admin.component.scss',
    './dashboard.component.scss',
  ]
})

export class DashboardComponent implements OnInit {

  serverInfo: string;

  constructor(private adminHttp: AdminHttpService, private toastr: ToastrService) {
    // const body = document.getElementsByTagName('body')[0];
    // body.classList.add('hold-transition');
    // body.classList.add('skin-blue');
    // body.classList.add('fixed');
    // body.classList.add('sidebar-mini');
    this.adminHttp.get('/admin/server-info').subscribe( (res: any) => {
      this.serverInfo = res.data.server;
    }, error => {
      toastr.error(error.error.message);
    });
  }

  ngOnInit() {

    // remove class body
    // body.classList.remove("body-landing");
  }
}
