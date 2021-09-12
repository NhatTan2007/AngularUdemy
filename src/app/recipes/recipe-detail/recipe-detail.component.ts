import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '@_shared/models/recipe.model';
import { RecipeService } from '@_shared/services/recipe/recipe.service';
import { ShoppingListService } from '@_shared/services/shopping-list/shopping-list.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.component.html',
	styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
	recipe: Recipe
	constructor(private shoppingListService: ShoppingListService,
				private recipeService: RecipeService,
				private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			const id = +params['id'];
			this.recipe = this.recipeService.getRecipe(id);
		});
		
	}

	addIngredientsToShoppingList(){
		this.shoppingListService.addedIngredient.next(this.recipe.ingredients);
		// this.router.navigateByUrl('/shopping/shopping-list')
	}
}
