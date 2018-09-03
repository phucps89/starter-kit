import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { Logger } from '../logger.service';

const log = new Logger('AdminAuthGuard');

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router ) { }

  canActivate(): boolean {
    if (localStorage.getItem('admin_token') !== null) {
      return true;
    }

    log.debug('Not authenticated, redirecting...');
    this.router.navigate(['/admin/login'], { replaceUrl: true });
    return false;
  }

}
