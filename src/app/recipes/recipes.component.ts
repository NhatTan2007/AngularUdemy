import { Component, OnInit } from '@angular/core';
import { Recipe } from '@_shared/models/recipe.model';
import { RecipeService } from '@_shared/services/recipe/recipe.service';

@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
	recipeSelected: Recipe;
	constructor(private recipeService: RecipeService) { }

	ngOnInit(): void {
		this.recipeService.recipeSelected.subscribe((recipe) => this.recipeSelected = recipe);
	}

}
