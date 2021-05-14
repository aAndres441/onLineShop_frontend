import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TitleComponent } from '../core/components/title/title.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';

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