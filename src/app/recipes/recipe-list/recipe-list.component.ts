import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '@_shared/models/recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	@Input('recipeData') recipe: Recipe
	@Output('recipeSelected') recipeSelected = new EventEmitter<Recipe>();
	constructor() { }

	ngOnInit(): void {
	}

	onSelected(){
		this.recipeSelected.emit(this.recipe);
	}

}
