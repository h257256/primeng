import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate
} from '@angular/router';

import {AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate  {
    /*
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    */
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('ActivatedRouteSnapshotUrl:' + route.url);
        console.log('RouterStateSnapshotUrl:' + state.url);
        const url = state.url;

        return this.CheckLogin(url);
    }

    CheckLogin(url: string): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }

        this.authService.redirectUrl = url;

        this.router.navigate(['/login']);
        return false;
    }
 }
