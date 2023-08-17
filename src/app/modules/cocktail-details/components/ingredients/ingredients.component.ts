import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Cocktail } from "src/app/modules/cocktail-details/models/cocktail.model";
import { CocktailDetailsService } from "src/app/modules/cocktail-details/services/cocktail-details.service";

@Component({
    selector: "ingredients",
    templateUrl: "./ingredients.component.html",
    styleUrls: ["ingredients.component.css"]
})
export class Ingredients implements OnInit {
    public selectedCocktail?: Cocktail;

    constructor(private route: Router, private activatedRoute: ActivatedRoute, private cocktailDetailsService: CocktailDetailsService) {}

    ngOnInit(): void {
        const selectedDrinkId = this.activatedRoute.snapshot.params?.['cocktailId'];
        this.cocktailDetailsService.showSpinner.next(true);
        this.cocktailDetailsService.getIngredientsById(selectedDrinkId).subscribe((res: any) => {
            this.setIngredientDetails(res?.drinks[0]);
        })
    }

    setIngredientDetails(drinkObject: any) {
        const strIngredients = [];
        for(let i=1; i <=15; i++) {
            if (drinkObject['strIngredient'+ i]) {
                const ingredient = drinkObject['strMeasure' + i] ? drinkObject['strIngredient'+ i] + ` - ` + drinkObject['strMeasure' + i] : drinkObject['strIngredient'+ i]
                strIngredients?.push(ingredient);
            }
        }
        this.selectedCocktail = {...drinkObject, strIngredients: strIngredients};
        this.cocktailDetailsService.showSpinner.next(false);
    }
    
}