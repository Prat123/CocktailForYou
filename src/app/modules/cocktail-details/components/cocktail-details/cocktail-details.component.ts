import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { FilterOptions } from "src/app/constants";
import { CocktailDetailsService } from "src/app/modules/cocktail-details/services/cocktail-details.service";
import { Cocktail } from "../../models/cocktail.model";

@Component({
  selector: "cocktail-details",
  templateUrl: "./cocktail-details.component.html",
  styleUrls: ["./cocktail-details.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class CocktailDetails implements OnInit {
  public cocktailDetails: Cocktail[] = [];
  public filterOptions: String[] = FilterOptions;
  public filteredCocktailDetails: Cocktail[] = [];
  public selectedOption = "";
  public selectedCategory = "";
  public displayDetails = false;

  constructor(public cocktailDetailsService: CocktailDetailsService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.displayDetails = false;
    this.selectedCategory = this.activatedRoute.snapshot.params?.['category'];
    this.cocktailDetailsService.showSpinner.next(true);
    this.cocktailDetailsService.getDrinksByCategory(this.selectedCategory).subscribe((res: any) => {
      this.cocktailDetailsService.showSpinner.next(false);
      this.displayDetails = true;
      this.cocktailDetails = res?.drinks;
      this.cocktailDetailsService.drinkDetails = res?.drinks;
      this.filteredCocktailDetails = [...this.cocktailDetails];
    })

  }

  onSelectOption() {
    if (!this.selectedOption) {
      this.filteredCocktailDetails = [...this.cocktailDetails];
      return;
    }
    this.filteredCocktailDetails = this.cocktailDetails.filter(cocktail => cocktail?.strAlcoholic?.toLowerCase().includes(this.selectedOption.toLowerCase()));
  }

  openCocktailCard(cocktail: Cocktail) {
    console.log("selectd cocktail is ", cocktail?.idDrink);
    this.route.navigate(["cocktails/" + `${cocktail?.idDrink}` + "/ingredients"])
  }

}