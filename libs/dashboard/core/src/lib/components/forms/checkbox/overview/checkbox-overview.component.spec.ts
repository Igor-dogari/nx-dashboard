import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxOverviewComponent } from './checkbox-overview.component';

describe('OverviewComponent', () => {
  let component: CheckboxOverviewComponent;
  let fixture: ComponentFixture<CheckboxOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
