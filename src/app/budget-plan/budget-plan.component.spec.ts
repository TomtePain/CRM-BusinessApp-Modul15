import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPlanComponent } from './budget-plan.component';

describe('BudgetPlanComponent', () => {
  let component: BudgetPlanComponent;
  let fixture: ComponentFixture<BudgetPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetPlanComponent]
    });
    fixture = TestBed.createComponent(BudgetPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
