import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemItemComponent } from './item-item-component';

describe('ItemItemComponent', () => {
  let component: ItemItemComponent;
  let fixture: ComponentFixture<ItemItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemItemComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
