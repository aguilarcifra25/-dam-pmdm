import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonItemComponent } from './pokemon-item-component';

describe('PokemonItemComponent', () => {
  let component: PokemonItemComponent;
  let fixture: ComponentFixture<PokemonItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
