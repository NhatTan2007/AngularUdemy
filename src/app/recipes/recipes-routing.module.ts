import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

const routes: Routes = [
	{
		path: "",
		component: RecipeStartComponent,
		pathMatch: "full"
	},
	{
		path: "detail/:id",
		component: RecipeDetailComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RecipesRoutingModule { }
