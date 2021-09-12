import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { ErrorsComponent } from './errors.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    ErrorsComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
