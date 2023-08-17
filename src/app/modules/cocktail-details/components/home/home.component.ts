import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategoriesList } from "src/app/constants";
import { Cocktail } from "../../models/cocktail.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cocktailDetails: Cocktail[] = [];
  public categoryList: String[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryList = CategoriesList;
  }

  // Method to navigate to user to cocktails page where individual cocktails
  // available are dispolayed based on selected categoty.
  onClick(category: any) {
    this.router.navigate(['/cocktails/'+category], { relativeTo: this.activatedRoute });
  }

}