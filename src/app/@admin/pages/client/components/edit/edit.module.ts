import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';

const COMPONENTS =[EditComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
