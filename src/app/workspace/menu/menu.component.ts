import { Component, OnInit } from '@angular/core';
import {MenuModule, MenuItem} from 'primeng/primeng';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
    items: MenuItem[];
    constructor() { }

    ngOnInit() {
        this.items = [
            {label: 'wellcome', icon: 'fa fa-info', routerLink: ['wellcome'] },
            {label: '状态', icon: 'fa fa-list-alt', routerLink: ['status']},
            {label: 'ProxyStatus', icon: 'fa fa-list-alt', routerLink: ['proxystatus']},
            {label: 'Car', icon: 'fa fa-list-alt', routerLink: ['car']},
            {label: 'Hero', icon: 'fa fa-list-alt', routerLink: ['hero']},
            {label: 'Undo', icon: 'fa-refresh', routerLink: ['undo']}
        ];
     }
}
