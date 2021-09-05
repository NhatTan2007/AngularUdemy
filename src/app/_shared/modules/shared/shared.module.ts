import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '@_shared/components/header/header.component';
import { NavbarComponent } from '@_shared/components/navbar/navbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
  ],
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
    CollapseModule,
    HeaderComponent
  ]
})
export class SharedModule { }
