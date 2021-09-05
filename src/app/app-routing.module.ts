import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "recipe",
		loadChildren: () => import('@recipes/recipes.module').then(m => m.RecipesModule)
	},
	{
		path: "shopping",
		loadChildren: () => import('@shopping/shopping.module').then(m => m.ShoppingModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
