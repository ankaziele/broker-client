import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePricingComponent } from './observable-pricing.component';

describe('ObservablePricingComponent', () => {
  let component: ObservablePricingComponent;
  let fixture: ComponentFixture<ObservablePricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablePricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
