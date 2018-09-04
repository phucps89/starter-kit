import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {HttpService} from '@app/core/http/http.service';
import {ScriptService} from '@app/core/script.service';
import {AdminHttpService} from '@app/core/http/adminhttp.service';
import {ToastrService} from 'ngx-toastr';
import {Pagination} from '@app/models/pagination';
import {Observable, Subject} from 'rxjs';
import {LazyLoadEvent} from 'primeng/api';

declare var $: any;

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './category.list.component.html',
  styleUrls: [
    '../../admin.component.scss',
    './category.list.component.scss',
  ]
})

export class CategoryListComponent implements OnInit {

  columns: any[];
  categories: any[] = [];
  categoryPage: Pagination;

  lazyEvent: LazyLoadEvent;

  constructor(private adminHttp: AdminHttpService, private toastr: ToastrService) {
    this.columns = [
      { name: 'ID' },
      { name: 'Name' },
    ];
    // this.getCategories(1, 15);
  }

  getCategories(page: any, length: any, filter: object = {}) {
    this.categories = [];
    let params = {
      page: page,
      length: length
    };
    params = {...params, ...filter};
    const queryString = $.param(params);
    this.adminHttp.get('/admin/category?' + queryString).subscribe((res: any) => {
      res.data.data.forEach((item: any) => {
        this.categories.push({
          id: item.id,
          name: item.name
        });
      });

      this.categoryPage = res.data as Pagination;
    });
  }

  ngOnInit() {

    // remove class body
    // body.classList.remove("body-landing");
  }

  setPage($event: any) {
  }

  loadCarsLazy($event: LazyLoadEvent) {
    console.log($event);
    const filters = {};
    Object.keys($event.filters).forEach(key => {
      if ($event.filters[key].value.target.value !== '') {
        filters[key] = $event.filters[key].value.target.value;
      }
    });
    let rows = $event.rows;
    if (rows == null) {
      rows = 15;
      $event.rows = rows;
    }
    this.lazyEvent = $event;
    this.getCategories($event.first + 1, rows, filters);
  }

  filter($event: any, field: any) {
    console.log($event);
    // this.filterCategory[field] = $event.target.value;
    // this.getCategories(this.lazyEvent.first + 1, this.lazyEvent.rows, this.filterCategory);
  }
}
