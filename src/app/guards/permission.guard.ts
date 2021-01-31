import { AppRouteService } from '../services/app-route-service/app-route.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
    constructor(
        private appRouter: AppRouteService,
        private cookieService: CookieService
    ) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        const token: string = this.cookieService.get('token');
        if (!token || token && token.length === 0) {
            this.appRouter.goTo('/auth');
            return false;
        }
        return true;
    }
}
