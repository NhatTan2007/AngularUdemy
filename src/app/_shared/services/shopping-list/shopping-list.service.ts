import { Injectable} from '@angular/core';
import { Ingredient } from '@_shared/models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ShoppingListService{
	private ingredients: Ingredient[] = [
		new Ingredient('Apple', 5),
		new Ingredient('Tomato', 10),
	];

	addedIngredient: Subject<Ingredient | Ingredient[]> = new Subject<Ingredient | Ingredient[]>();
	constructor() { }

	getIngredients() {
		return this.ingredients;
	}
}
