import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@_shared/models/ingredient.model';

@Component({
	selector: 'app-shopping',
	templateUrl: './shopping.component.html',
	styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
	ingredients: Ingredient[] = [
		new Ingredient('Apple', 5),
		new Ingredient('Tomato', 10),
	];

	constructor() { }

	ngOnInit(): void { }

	addIngredient(ingredient){
		this.ingredients.push(ingredient);
	}
}
