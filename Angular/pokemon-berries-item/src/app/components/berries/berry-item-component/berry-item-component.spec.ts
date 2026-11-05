import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerryItemComponent } from './berry-item-component';

describe('BerryItemComponent', () => {
  let component: BerryItemComponent;
  let fixture: ComponentFixture<BerryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BerryItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
