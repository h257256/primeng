import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {AuthGuard} from '../../auth-guard.service';


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


import { CarDataTableComponent } from './car-datatable.component';

const routes: Routes = [
    {
      path: '',
      component: CarDataTableComponent,
    }
  ];
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        CommonModule,
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
    declarations: [
        CarDataTableComponent
    ],
    providers: [],
})
export class CarDatatableModule { }
