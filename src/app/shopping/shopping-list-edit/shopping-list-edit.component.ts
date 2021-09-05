import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '@_shared/models/ingredient.model';

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
	@Output() addIngredient = new EventEmitter<Ingredient>();

	ingredient: Ingredient;
	constructor() {
		this.ingredient = new Ingredient('', 0);
	}

	ngOnInit(): void {
	}

	submitIngredient(){
		this.addIngredient.emit(new Ingredient(this.ingredient.name, this.ingredient.amount));
	}
}
