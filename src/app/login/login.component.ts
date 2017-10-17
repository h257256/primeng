import { Component } from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';

import {AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    message: string;
    userName: string;
    password: string;

     constructor(public authService: AuthService, public router: Router) {
       this.setMessage();
     }

     setMessage() {
       this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
     }

     login() {
       this.message = 'Trying to log in ...';

       this.authService.userName = this.userName;
       this.authService.login().subscribe(() => {
         this.setMessage();
         if (this.authService.isLoggedIn) {
           // Get the redirect URL from our auth service
           // If no redirect has been set, use the default
           const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'workspace';

           // Redirect the user
           this.router.navigate([redirect]);
         }
       });
     }

     logout() {
       this.authService.logout();
       this.setMessage();
     }
}