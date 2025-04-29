import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionRequiredOverviewComponent } from './action-required-overview.component';

describe('OverviewComponent', () => {
  let component: ActionRequiredOverviewComponent;
  let fixture: ComponentFixture<ActionRequiredOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionRequiredOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionRequiredOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
