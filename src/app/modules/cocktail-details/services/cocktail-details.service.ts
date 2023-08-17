import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Cocktail } from "../models/cocktail.model";

@Injectable()
export class CocktailDetailsService {
    public drinkDetails: Cocktail[] = [];
    public showSpinner = new Subject<any>();

    constructor(private http: HttpClient) {
    }

    public spinnerListener(): Observable<boolean> {
        return this.showSpinner.asObservable();
    }

    getDrinksByCategory(category: String) {
        return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + category);
    }

    getIngredientsById(drinkId: String) {
        return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId);
    }

}