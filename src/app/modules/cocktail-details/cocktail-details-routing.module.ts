import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CocktailDetails } from './components/cocktail-details/cocktail-details.component';
import { Ingredients } from './components/ingredients/ingredients.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cocktails/:category', component: CocktailDetails },
  { path: 'cocktails/:cocktailId/ingredients', component: Ingredients }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailDetailsRoutingModule { }
