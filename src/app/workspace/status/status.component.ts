import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClientStatus} from './ClientStatus';

interface ItemsResponse {
    results: ClientStatus[];
  }

@Component({
    templateUrl: './status.component.html'
})

export class StatusComponent implements OnInit {
    clients: ClientStatus[];
    constructor(private http: HttpClient) { }

    ngOnInit() {
        const url1 = 'http://localhost:60447/api/hero';
        const url = 'http://192.168.16.248:9000/api/status/Client/';

        this.http.get<ClientStatus[]>(url)
        .subscribe(data => {
          this.clients = data;
        });
    }
}
