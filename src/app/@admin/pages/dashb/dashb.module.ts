import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbRoutingModule } from './dashb-routing.module';
import { DashbComponent } from './dashb.component';

const COMPONENTS = [DashbComponent];

const MODULES = [CommonModule, DashbRoutingModule];

@NgModule({

  declarations: [
    ...COMPONENTS
  ],

  imports: [
    ...MODULES
  ]
  
})
export class DashbModule { }
