import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  ngOnInit(): void {
  }
  constructor(private router: Router) {

  }
}
