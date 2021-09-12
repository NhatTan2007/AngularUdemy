import { Component, OnInit } from '@angular/core';
import { Ingredient } from '@_shared/models/ingredient.model';
import { ShoppingListService } from '@_shared/services/shopping-list/shopping-list.service';

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {
	ingredient: Ingredient;
	constructor(private shoppingListService: ShoppingListService) {
		this.ingredient = new Ingredient('', 0);
	}

	ngOnInit(): void {
	}

	submitIngredient(){
		console.log(this.ingredient);
		this.shoppingListService.addedIngredient.next(new Ingredient(this.ingredient.name, this.ingredient.amount));
	}
}
