import { Routes } from '@angular/router';

import {WorkspaceComponent} from './workspace.component';
import {WellcomeComponent} from './wellcome/wellcome.component';
import {AuthGuard} from '../auth-guard.service';

export const workspaceRoutes: Routes = [
  {
    path: '',
    component: WorkspaceComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', redirectTo: 'wellcome', pathMatch: 'full'
      },
      {
        path: 'wellcome',
        component: WellcomeComponent
      },
      {
        path: 'status',
        loadChildren: './status/status.module#StatusModule'
      },
      {
        path: 'proxystatus',
        loadChildren: './status/proxy/proxy-status.module#ProxyStatusModule'
      },
      {
        path: 'car',
        loadChildren: './car/car-datatable.module#CarDatatableModule'
      },
      {
        path: 'undo',
        loadChildren: '../pageNotFound/not-found.module#PageNotFoundModule'
      },
      {
        path: '**',
        loadChildren: '../pageNotFound/not-found.module#PageNotFoundModule'
      },
    ]
  }
];
