import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TitleComponent } from '@administrativo/core/components/title/title.component';
import { HeaderComponent } from '@administrativo/core/components/header/header.component';
import { SidebarComponent } from '@administrativo/core/components/sidebar/sidebar.component';

const MODULES = [
  CommonModule, 
  AdminRoutingModule
];

const COMPONENTS = [
  AdminComponent, 
  TitleComponent,
  HeaderComponent,
  SidebarComponent
];

@NgModule({

  declarations: [
    ...COMPONENTS
  ],

  imports: [
    ...MODULES,
  ]

})
export class AdminModule { }


/* 
  exports:[
    ...MODULES
  ] */