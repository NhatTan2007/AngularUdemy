import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '@_shared/models/recipe.model';
import { RecipeService } from '@_shared/services/recipe/recipe.service';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[];

	recipeSelected: Recipe;
	constructor(private recipeService: RecipeService) { }

	ngOnInit(): void {
		this.recipes = this.recipeService.getRecipes();
	}

	bindingRecipeDetail(value) {
		this.recipeSelected = value;
	}


}
