import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingComponent } from './shopping.component';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent,
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    FormsModule
  ],
  exports: [
    ShoppingComponent
  ]
})
export class ShoppingModule { }
