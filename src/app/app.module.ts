import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Share module
import { SharedModule } from "@_shared/modules/shared/shared.module";

// Components import

// Library import
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipesModule } from '@recipes/recipes.module';
import { ShoppingModule } from '@shopping/shopping.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        RecipesModule,
        ShoppingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
