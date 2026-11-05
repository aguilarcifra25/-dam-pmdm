import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BerryDetailComponent } from './berry-detail-component';

describe('BerryDetailComponent', () => {
  let component: BerryDetailComponent;
  let fixture: ComponentFixture<BerryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerryDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BerryDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
