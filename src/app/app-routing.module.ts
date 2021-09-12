import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '@recipes/recipes.component';

const routes: Routes = [
	{
		path: "",
		redirectTo: "recipe",
		pathMatch: "full"
	}, 
	{
		path: "recipe",
		component: RecipesComponent,
		loadChildren: () => import('@recipes/recipes.module').then(m => m.RecipesModule)
	},
	{
		path: "shopping",
		loadChildren: () => import('@shopping/shopping.module').then(m => m.ShoppingModule)
	},
	{
		path: "errors",
		loadChildren: () => import('@errors/errors.module').then(m => m.ErrorsModule)
	},
	{
		path: "**",
		redirectTo: "/errors/not-found",
		pathMatch: "full"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
