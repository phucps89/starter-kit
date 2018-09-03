import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import {Logger, I18nService, AuthenticationService, HttpService} from '@app/core';
import {ToastrService} from 'ngx-toastr';

declare var $: any;

// require('./vendor/jquery/jquery-3.2.1.min.js');
// require('./vendor/bootstrap/js/popper.js');
// require('./vendor/bootstrap/js/bootstrap.js');
// require('./vendor/tilt/tilt.jquery.min.js');
require('./js/main.js');

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  version: string = environment.version;
  error: string;
  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private i18nService: I18nService,
              private http: HttpService,
              private toastr: ToastrService) {
    this.createForm();
  }

  ngOnInit() {
    // $(document).ready(function() {
    //   $('.js-tilt').tilt({
    //     scale: 1.1
    //   });
    // });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.http.post('/login', {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }).subscribe((res: any) => {
      localStorage.setItem('admin_token', res.data.token);
      this.router.navigateByUrl('/admin');
    }, (error: any) => {
      this.toastr.error(error.error.message);
    });
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }
}
