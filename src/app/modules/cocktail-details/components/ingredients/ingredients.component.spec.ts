import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CocktailDetailsService } from "src/app/modules/cocktail-details/services/cocktail-details.service";
import { of } from "rxjs";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CategoriesList } from "src/app/constants";
import { Ingredients } from "./ingredients.component";


describe('Ingredients', () => {
    let component: Ingredients;
    let fixture: ComponentFixture<Ingredients>;
    let cocktailDetailsService: CocktailDetailsService;
    const fakeActivatedRoute = {
        snapshot: {
            data: {
                'cocktailId': '11728'
            }
        }
    };
    const drinkDetails = {
        "idDrink": "11728", "strDrink": "Martini", "strDrinkAlternate": null,
        "strTags": null, "strVideo": "https:\/\/www.youtube.com\/watch?v=ApMR3IWYZHI",
        "strCategory": "Cocktail", "strIBA": "Unforgettables", "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive.",
        "strInstructionsES": null, "strInstructionsDE": "Direkt: Alle Zutaten in ein Mischglas mit Eisw\u00fcrfeln geben. Gut umr\u00fchren. In einem gek\u00fchlten Martini-Cocktailglas abseihen. Den Saft aus der Zitronenschale auf das Getr\u00e4nk dr\u00fccken oder mit Olive garnieren.",
        "strInstructionsFR": null,
        "strInstructionsIT": "Versare tutti gli ingredienti nel mixing glass con cubetti di ghiaccio. Mescolare bene. Spremi la scorza di limone sulla bevanda o guarnisci con l'oliva.Filtrare in una coppetta da cocktail Martini ghiacciata. ",
        "strInstructionsZH-HANS": null, "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/71t8581504353095.jpg",
        "strIngredient1": "Gin", "strIngredient2": "Dry Vermouth", "strIngredient3": "Olive",
        "strIngredient4": null, "strIngredient5": null, "strIngredient6": null, "strIngredient7": null,
        "strIngredient8": null, "strIngredient9": null, "strIngredient10": null, "strIngredient11": null,
        "strIngredient12": null, "strIngredient13": null, "strIngredient14": null, "strIngredient15": null, "strMeasure1": "1 2\/3 oz ",
        "strMeasure2": "1\/3 oz ", "strMeasure3": "1 ", "strMeasure4": null, "strMeasure5": null,
        "strMeasure6": null, "strMeasure7": null, "strMeasure8": null, "strMeasure9": null,
        "strMeasure10": null, "strMeasure11": null, "strMeasure12": null, "strMeasure13": null,
        "strMeasure14": null, "strMeasure15": null, "strImageSource": null, "strImageAttribution": null,
        "strCreativeCommonsConfirmed": "No", "dateModified": "2017-09-02 12:51:35"
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [Ingredients],
            imports: [FormsModule,],
            providers: [CocktailDetailsService, HttpClient, HttpHandler,
                { provide: ActivatedRoute, useValue: fakeActivatedRoute }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Ingredients);
        component = fixture.componentInstance;
        cocktailDetailsService = TestBed.inject(CocktailDetailsService);
        fixture.detectChanges();
    });

    it("should be created", () => {
        expect(component).toBeTruthy();
    });

    it("should test component init", () => {
        spyOn(cocktailDetailsService, 'getIngredientsById').and.returnValue(of(drinkDetails));
        component.ngOnInit();

        expect(component.selectedCocktail?.strIngredients?.length).toEqual(5);
    });
});