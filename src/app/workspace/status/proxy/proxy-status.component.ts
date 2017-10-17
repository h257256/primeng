import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { ProxyStatus } from './ProxyStatus';


@Component({
    selector: 'app-proxy-status',
    templateUrl: 'proxy-status.component.html'
})
export class ProxyStatusComponent implements OnInit {
    cols = [
        {field: 'LoginId', header: 'loginId'},
        {field: 'StartTime', header: 'startTime'},
        {field: 'RecievePackets', header: 'recievePackets'},
        {field: 'SendPackets', header: 'sendPackets'}
    ];


    message: string;
    states: ProxyStatus[];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.GetStatus();
     }

     GetStatus(): void {
        const url = 'http://192.168.16.248:9000/api/proxy/status/';
        this.http.get< ProxyStatus[] >(url).subscribe(
            data => {
                this.message = 'OK';
                this.states = data;
            },
            err => {
                this.message = 'Error';
            }
        );
     }
}
