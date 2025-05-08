import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordStrengthOverviewComponent } from './password-strength-overview.component';

describe('OverviewComponent', () => {
  let component: PasswordStrengthOverviewComponent;
  let fixture: ComponentFixture<PasswordStrengthOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
