import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocktailItemComponent } from './cocktail-item-component';

describe('CocktailItemComponent', () => {
  let component: CocktailItemComponent;
  let fixture: ComponentFixture<CocktailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
