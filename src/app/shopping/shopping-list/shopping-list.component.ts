import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '@_shared/models/ingredient.model';

@Component({
	selector: 'app-shopping-list',
	templateUrl: './shopping-list.component.html',
	styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
	@Input() ingredient: Ingredient
	constructor() { }

	ngOnInit(): void {
	}

}
