import { Injectable } from '@angular/core';
import { RecipesModule } from '@recipes/recipes.module';
import { Ingredient } from '@_shared/models/ingredient.model';
import { Recipe } from '@_shared/models/recipe.model';
import { Subject } from 'rxjs';

export class RecipeService {
	recipeSelected: Subject<Recipe> = new Subject<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(1, "Test Recipe 1", "Test description 1",
			"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)
			]),
		new Recipe(2, "Test Recipe 2", "Test description 2",
			"https://www.simplyrecipes.com/thmb/IbY_MK3pA1G_ZHzWltgZCxe_OUk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-vertical-a-1600-0eafb4cd27b74617abb36379751eed51.jpg",
			[
				new Ingredient('Buns', 2),
				new Ingredient('Meat', 1)
			])
	];
	constructor() { }

	getRecipes(): Recipe[] {
		return this.recipes;
	}

	getRecipe(id: number): Recipe{
		return this.recipes.find(recipe => recipe.id === id);
	}
}
