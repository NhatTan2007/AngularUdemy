import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@_shared/models/ingredient.model';
import { ShoppingListService } from '@_shared/services/shopping-list/shopping-list.service';

@Component({
	selector: 'app-shopping',
	templateUrl: './shopping.component.html',
	styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
	ingredients: Ingredient[]
	copyIngredients: Ingredient[];

	constructor(private shoppingListService: ShoppingListService) { }

	ngOnInit(): void {
		this.ingredients = this.shoppingListService.getIngredients();
		this.subscribeForAddedIngredient();
	}

	private subscribeForAddedIngredient() {
		this.shoppingListService.addedIngredient.subscribe((value: Ingredient | Ingredient[]) => {
			if (Array.isArray(value)) {
				this.ingredients.push(...value);
			} else {
				this.ingredients.push(value);
			}
		});
	}
}
