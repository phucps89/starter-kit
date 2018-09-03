import { Inject, Injectable, InjectionToken, Injector, Optional } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { CacheInterceptor } from './cache.interceptor';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import {HttpService} from '@app/core';
import {AdminHttpInterceptor} from '@app/core/http/adminhttp.interceptor';


/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
export const HTTP_DYNAMIC_INTERCEPTORS = new InjectionToken<HttpInterceptor>('HTTP_DYNAMIC_INTERCEPTORS');

/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
@Injectable()
export class AdminHttpService extends HttpService {

  constructor(protected httpHandler: HttpHandler,
              protected injector: Injector,
              @Optional() @Inject(HTTP_DYNAMIC_INTERCEPTORS) protected interceptors: HttpInterceptor[] = []) {
    super(httpHandler, injector, interceptors);
    if (!this.interceptors) {
      // Configure default interceptors that can be disabled here
      this.interceptors = [
        this.injector.get(ApiPrefixInterceptor),
        this.injector.get(ErrorHandlerInterceptor),
        this.injector.get(AdminHttpInterceptor),
      ];
    }
  }
}
