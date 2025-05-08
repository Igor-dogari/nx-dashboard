import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleOverviewComponent } from './button-toggle-overview.component';

describe('OverviewComponent', () => {
  let component: ButtonToggleOverviewComponent;
  let fixture: ComponentFixture<ButtonToggleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonToggleOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToggleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
