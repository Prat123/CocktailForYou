import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CocktailDetailsService } from "src/app/modules/cocktail-details/services/cocktail-details.service";
import { of } from "rxjs";
import { mockCocktail } from "../../models/cocktail.model";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { CategoriesList } from "src/app/constants";


describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let cocktailDetailsService: CocktailDetailsService;
    const fakeActivatedRoute = {
        snapshot: { data: {} }
    } as ActivatedRoute;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [FormsModule,],
            providers: [CocktailDetailsService, HttpClient, HttpHandler,
                { provide: ActivatedRoute, useValue: fakeActivatedRoute }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        cocktailDetailsService = TestBed.inject(CocktailDetailsService);
        fixture.detectChanges();
    });

    it("should be created", () => {
        expect(component).toBeTruthy();
    });

    it("should test component init", () => {
        component.ngOnInit();
        
        expect(component.categoryList).toEqual(CategoriesList);
    });
});