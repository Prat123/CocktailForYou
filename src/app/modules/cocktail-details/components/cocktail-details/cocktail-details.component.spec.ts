import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CocktailDetails } from "./cocktail-details.component";
import { CocktailDetailsService } from "src/app/modules/cocktail-details/services/cocktail-details.service";
import { of } from "rxjs";
import { mockCocktail } from "../../models/cocktail.model";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";


describe('CocktailDetailsComponent', () => {
    let component: CocktailDetails;
    let fixture: ComponentFixture<CocktailDetails>;
    let cocktailDetailsService: CocktailDetailsService;
    const fakeActivatedRoute = {
        snapshot: { data: {} }
    } as ActivatedRoute;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CocktailDetails],
            imports: [FormsModule,],
            providers: [CocktailDetailsService, HttpClient, HttpHandler,
                { provide: ActivatedRoute, useValue: fakeActivatedRoute }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CocktailDetails);
        component = fixture.componentInstance;
        cocktailDetailsService = TestBed.inject(CocktailDetailsService);
        fixture.detectChanges();
    });

    it("should be created", () => {
        expect(component).toBeTruthy();
    });

    it("should test component init", () => {
        spyOn(cocktailDetailsService, 'getDrinksByCategory').and.returnValue(of({
            drinks: [mockCocktail, mockCocktail]
        }));
        component.ngOnInit();
        fixture.detectChanges();

        expect(cocktailDetailsService.getDrinksByCategory).toHaveBeenCalled();
        expect(component.cocktailDetails).toEqual([mockCocktail, mockCocktail]);
        const cards = fixture.debugElement.nativeElement.querySelectorAll(".card");
        expect(cards.length).toEqual(2);
    });
});