import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { SharedModule } from '@_shared/modules/shared/shared.module';
import { ShoppingModule } from '@shopping/shopping.module';


@NgModule({
    declarations: [
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipesComponent
    ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
        SharedModule,
        ShoppingModule
    ],
    exports: [
        RecipesComponent
    ]
})
export class RecipesModule { }
