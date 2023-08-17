import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CocktailDetails } from "./components/cocktail-details/cocktail-details.component";
import { Ingredients } from "./components/ingredients/ingredients.component";
import { HomeComponent } from "./components/home/home.component";
import { CocktailDetailsService } from "./services/cocktail-details.service";
import { FormsModule } from "@angular/forms";
import { CocktailDetailsRoutingModule } from "./cocktail-details-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        CocktailDetails,
        Ingredients,
        HomeComponent
    ],
    providers: [
        CocktailDetailsService
    ],
    imports: [
        CommonModule,
        FormsModule,
        CocktailDetailsRoutingModule,
        HttpClientModule,
    ]
})
export class CocktailDetailsModule {

}