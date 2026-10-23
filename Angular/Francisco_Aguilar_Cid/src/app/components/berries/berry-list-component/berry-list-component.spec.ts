import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerryListComponent } from './berry-list-component';

describe('BerryListComponent', () => {
  let component: BerryListComponent;
  let fixture: ComponentFixture<BerryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerryListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BerryListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
