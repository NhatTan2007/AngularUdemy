import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    BsDropdownModule,
    FormsModule,
    CollapseModule
  ],
  exports: [
    BsDropdownModule,
    CommonModule,
    FormsModule,
    CollapseModule
  ]
})
export class SharedModule { }
