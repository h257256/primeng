import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot} from '@angular/router';

@Component({
    templateUrl: './not-found.component.html'
})

export class PageNotFoundComponent implements OnInit, OnChanges {
    message: string;

    ngOnChanges(changes: SimpleChanges): void {
        this.message = this.router.url;
    }

    constructor(public router: Router) {
    }
    ngOnInit() {
        this.message = this.router.url;
     }
}
