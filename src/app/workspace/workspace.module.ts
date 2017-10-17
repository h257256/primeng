import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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

import {WorkspaceComponent} from './workspace.component';

import {LogoutComponent} from './logout/logout.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MenuComponent} from './menu/menu.component';


import {WellcomeComponent} from './wellcome/wellcome.component';
import {workspaceRoutes} from './workspace.routes';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild(workspaceRoutes),

    /****primeng****/
    SharedModule,        //  peimrNG 手风琴
    AccordionModule,     //  peimrNG 手风琴
    GrowlModule,         //  peimrNG msg提示
    TooltipModule,       //  Tooltip 提示
    ButtonModule,
    PanelModule,
    PanelMenuModule,
    MenuModule,
    DataTableModule,
  ],
  exports: [],
  declarations: [
    WorkspaceComponent,
    WellcomeComponent,
    LogoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [

  ],
})
export class WorkspaceModule {
}
