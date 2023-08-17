export class Cocktail {
    idDrink?: number;
    strDrink?: String;
    strCategory?: String;
    strAlcoholic?: String;
    strInstructions?: String;
    strIngredients?: String[];
    strDrinkThumb?: String;
    strImageSource?: String;
}

export const mockCocktail: Cocktail = {
    idDrink: 1,
    strDrink: '',
    strCategory: '',
    strAlcoholic: '',
    strInstructions: '',
    strIngredients:[],
    strDrinkThumb: '',
    strImageSource: ''
}