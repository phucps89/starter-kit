import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
import {AdminHttpService} from '@app/core/http/adminhttp.service';
import {ToastrService} from 'ngx-toastr';
import {Pagination} from '@app/models/pagination';
import {Observable, Subject} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-admin-catgory-list',
  templateUrl: './category.list.component.html',
  styleUrls: [
    '../../admin.component.scss',
    './category.list.component.scss',
  ]
})

export class CategoryListComponent implements OnInit {

  serverInfo: string;
  columns: any[];
  categories: any[] = [];
  categories$: Observable<any[]>;
  categoryPage: Pagination;
  categoryPageSubject = new Subject<Pagination>();
  categoryPage$ = this.categoryPageSubject.asObservable();

  constructor(private adminHttp: AdminHttpService, private toastr: ToastrService) {
    this.columns = [
      { name: 'ID' },
      { name: 'Name' },
    ];
    this.adminHttp.get('/admin/category').subscribe( (res: any) => {
      res.data.data.forEach( (item: any) => {
        this.categories.push({
          id: item.id,
          name: item.name
        });
      });

      this.categoryPage = res.data as Pagination;
      this.categoryPageSubject.next(this.categoryPage);
    });
  }

  ngOnInit() {

    // remove class body
    // body.classList.remove("body-landing");
  }

  setPage($event: any) {
  }
}
