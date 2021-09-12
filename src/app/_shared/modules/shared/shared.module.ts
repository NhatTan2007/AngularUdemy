import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '@_shared/components/header/header.component';
import { NavbarComponent } from '@_shared/components/navbar/navbar.component';
import { DropdownDirective } from '@_shared/directives/dropdown/dropdown.directive';


@NgModule({
	declarations: [
		HeaderComponent,
		NavbarComponent,
		DropdownDirective
	],
	imports: [
		CommonModule,
		SharedRoutingModule,
		FormsModule,
		CollapseModule
	],
	exports: [
		CommonModule,
		FormsModule,
		CollapseModule,
		HeaderComponent,
		DropdownDirective
	]
})
export class SharedModule { }
