import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPricingComponent } from './async-pricing.component';

describe('AsyncPricingComponent', () => {
  let component: AsyncPricingComponent;
  let fixture: ComponentFixture<AsyncPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
