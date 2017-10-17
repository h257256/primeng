import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
    message: string;
    constructor(public authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Hello, ' + this.authService.userName;
      }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/login');
      }

}
