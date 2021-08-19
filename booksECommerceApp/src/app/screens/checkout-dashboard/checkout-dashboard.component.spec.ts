import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDashboardComponent } from './checkout-dashboard.component';

describe('CheckoutDashboardComponent', () => {
  let component: CheckoutDashboardComponent;
  let fixture: ComponentFixture<CheckoutDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
