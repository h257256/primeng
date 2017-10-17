import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {SharedModule,
        AccordionModule,
        GrowlModule,
        TooltipModule,
        ButtonModule,
        PanelModule,
        PanelMenuModule,
        MenuModule,
        DataTableModule
      } from 'primeng/primeng';


import { ProxyStatusComponent } from './proxy-status.component';

const routes: Routes = [
    {
      path: '',
      component: ProxyStatusComponent,
    }
  ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        /****primeng****/
        SharedModule,        //  peimrNG 手风琴
        AccordionModule,     //  peimrNG 手风琴
        GrowlModule,         //  peimrNG msg提示
        TooltipModule,       //  Tooltip 提示
        ButtonModule,
        PanelModule,
        PanelMenuModule,
        MenuModule,
        DataTableModule
    ],
    exports: [],
    declarations: [ProxyStatusComponent],
    providers: [],
})
export class ProxyStatusModule { }
