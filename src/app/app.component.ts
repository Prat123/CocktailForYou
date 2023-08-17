import { Component, OnInit } from '@angular/core';
import { CocktailDetailsService } from './modules/cocktail-details/services/cocktail-details.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public showSpinner = false;
  constructor(public cocktailDetailsService: CocktailDetailsService) {}

  ngOnInit(): void {
    this.cocktailDetailsService.spinnerListener().subscribe((res: boolean) => {
      this.showSpinner = res;
    })
  }
}
