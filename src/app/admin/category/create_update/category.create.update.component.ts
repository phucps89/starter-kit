import {Component, OnInit} from '@angular/core';
import {AdminHttpService} from '@app/core/http/adminhttp.service';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-admin-category-createupdate',
  templateUrl: './category.create.update.component.html',
  styleUrls: [
    '../../admin.component.scss',
    './category.create.update.component.scss',
  ]
})

export class CategoryCreateUpdateComponent implements OnInit {
  categoryId: number;
  titleHeader: string;

  constructor(private adminHttp: AdminHttpService, private toastr: ToastrService, private route: ActivatedRoute) {
    this.categoryId = this.route.snapshot.params['id'];
    if (this.categoryId !== null) {
      this.getCategoryDetail(this.categoryId);
      this.titleHeader = 'Category update';
    } else {
      this.titleHeader = 'Category create';
    }
  }

  ngOnInit() {
    // remove class body
    // body.classList.remove("body-landing");
  }

  private getCategoryDetail(categoryId: number) {

  }
}
